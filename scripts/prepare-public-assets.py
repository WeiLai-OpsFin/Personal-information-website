"""Build privacy-reviewed web assets from the private resume material library.

The source PDFs and photos stay outside ``public`` and Git.  This script emits
only a tightly cropped portrait and low-resolution, redacted evidence previews.

Usage:
    E:\\Python312\\python.exe scripts\\prepare-public-assets.py \
        --source-root "D:\\...\\简历\\素材库"
"""

from __future__ import annotations

import argparse
from pathlib import Path

import pdfplumber
from PIL import Image, ImageDraw


RESOLUTION = 144
PDF_SCALE = RESOLUTION / 72
MAX_LONG_EDGE = 1400


def resize_for_web(image: Image.Image, max_edge: int = MAX_LONG_EDGE) -> Image.Image:
    width, height = image.size
    ratio = min(1.0, max_edge / max(width, height))
    if ratio == 1.0:
        return image
    return image.resize(
        (round(width * ratio), round(height * ratio)),
        Image.Resampling.LANCZOS,
    )


def save_webp(image: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    image = resize_for_web(image.convert("RGB"))
    image.save(path, "WEBP", quality=88, method=6, exif=b"")


def redact_pdf_rect(
    draw: ImageDraw.ImageDraw,
    rect: tuple[float, float, float, float],
) -> None:
    x0, top, x1, bottom = rect
    pad = 3
    draw.rounded_rectangle(
        (
            round(x0 * PDF_SCALE) - pad,
            round(top * PDF_SCALE) - pad,
            round(x1 * PDF_SCALE) + pad,
            round(bottom * PDF_SCALE) + pad,
        ),
        radius=4,
        fill="#e8eef3",
        outline="#c4d0da",
        width=1,
    )


def build_portrait(source_root: Path, output_root: Path) -> None:
    source = source_root / "HKUST_student_card_photo_1200x1500.jpg"
    with Image.open(source) as original:
        image = original.convert("RGB")
        width, height = image.size
        square = min(width, height)
        left = (width - square) // 2
        top = max(0, min(24, height - square))
        crop = image.crop((left, top, left + square, top + square))
        crop = crop.resize((720, 720), Image.Resampling.LANCZOS)
        save_webp(crop, output_root / "images" / "lai-wei-portrait-square.webp")


def build_icm_preview(source_root: Path, output_root: Path) -> None:
    source = (
        source_root
        / "其他可能用到的资料"
        / "09_Competition_Awards_Wei_Lai.pdf"
    )
    with pdfplumber.open(source) as pdf:
        page = pdf.pages[0]
        image = page.to_image(resolution=RESOLUTION).original.convert("RGB")
        draw = ImageDraw.Draw(image)

        # The participant and adviser names are drawn as vector outlines and
        # are not exposed by PDF text extraction. Keep Lai Wei's own name and
        # hide the two teammates plus the faculty adviser.
        redact_pdf_rect(draw, (335, 192, 522, 242))
        redact_pdf_rect(draw, (335, 260, 522, 292))

        # Crop before the issuer signatures and submission-control area. This
        # leaves the award title, recipient, school, year, and result visible
        # while excluding identifiers and third-party contact information.
        margin = round(14 * PDF_SCALE)
        safe_bottom = round(430 * PDF_SCALE)
        image = image.crop(
            (margin, margin, image.width - margin, safe_bottom)
        )
        save_webp(image, output_root / "evidence" / "icm-finalist-redacted.webp")


def build_path_academics_preview(source_root: Path, output_root: Path) -> None:
    source = (
        source_root
        / "其他可能用到的资料"
        / "09_Competition_Awards_Wei_Lai.pdf"
    )
    with pdfplumber.open(source) as pdf:
        # Page 4 is a grade transcript without student numbers, signatures,
        # contact details, QR codes, or third-party names. Remove the gender
        # row as an unnecessary personal attribute before publishing.
        image = pdf.pages[3].to_image(resolution=RESOLUTION).original.convert("RGB")
        draw = ImageDraw.Draw(image)
        redact_pdf_rect(draw, (28, 272, 220, 302))
        margin = round(16 * PDF_SCALE)
        image = image.crop(
            (margin, margin, image.width - margin, image.height - margin)
        )
        save_webp(image, output_root / "evidence" / "path-academics-grade.webp")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source-root", type=Path, required=True)
    parser.add_argument(
        "--output-root",
        type=Path,
        default=Path(__file__).resolve().parents[1] / "public",
    )
    args = parser.parse_args()

    build_portrait(args.source_root, args.output_root)
    build_icm_preview(args.source_root, args.output_root)
    build_path_academics_preview(args.source_root, args.output_root)

    for path in sorted((args.output_root / "evidence").glob("*.webp")):
        print(f"generated {path.name}: {path.stat().st_size} bytes")
    portrait = args.output_root / "images" / "lai-wei-portrait-square.webp"
    print(f"generated {portrait.name}: {portrait.stat().st_size} bytes")


if __name__ == "__main__":
    main()
