"""
Remove dark/black backgrounds from portrait photos and replace with white.
Uses a two-pass approach:
1. Mark pixels below a brightness threshold as transparent
2. Flatten onto a white background
"""
from PIL import Image
import os, sys

IMG_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'members')

# Names of images to process (black background ones)
TARGETS = ['葉炘然.png', '楊政龍.png', '郭亭君.png']

# Threshold: pixels with R,G,B ALL below this value are considered background
THRESHOLD = 45


def remove_black_bg(path: str) -> None:
    img = Image.open(path).convert('RGBA')
    pixels = img.load()
    w, h = img.size

    # Pass 1: turn near-black pixels transparent
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            # If very dark pixel, make transparent
            if r < THRESHOLD and g < THRESHOLD and b < THRESHOLD:
                pixels[x, y] = (r, g, b, 0)

    # Pass 2: flatten onto white background
    white_bg = Image.new('RGBA', img.size, (255, 255, 255, 255))
    white_bg.paste(img, mask=img.split()[3])  # use alpha as mask

    # Save back as PNG (RGB is fine since background is now white)
    result = white_bg.convert('RGB')
    result.save(path, 'PNG', optimize=True)
    print(f'  OK: {os.path.basename(path)}  ({w}x{h})')


if __name__ == '__main__':
    print(f'Processing images in: {os.path.abspath(IMG_DIR)}')
    for name in TARGETS:
        full = os.path.join(IMG_DIR, name)
        if not os.path.exists(full):
            print(f'  NOT FOUND: {name}')
            continue
        remove_black_bg(full)
    print('Done.')
