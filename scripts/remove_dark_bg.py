"""
Remove dark studio backgrounds from portrait photos.
Uses corner flood-fill BFS: starts from image edges, expands into
adjacent pixels whose brightness < THRESHOLD. This correctly identifies
background even if it has gradients, while preserving the subject's
dark clothing (which is not connected to the edges).
"""
import sys, os
from PIL import Image
from collections import deque

# --- Config -----------------------------------------------------------------
IMG_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'images', 'members')
DIST_DIR = os.path.join(os.path.dirname(__file__), '..', 'dist', 'images', 'members')
TARGETS  = ['ye_xinran.png', 'yang_zhenglong.png', 'guo_tingjun.png']
# Map English filenames → Chinese filenames (Pillow can handle Unicode paths)
NAME_MAP = {
    'ye_xinran.png'    : '\u8449\u7098\u7136.png',
    'yang_zhenglong.png': '\u694a\u653f\u9f8d.png',
    'guo_tingjun.png'  : '\u90ed\u4ead\u541b.png',
}
# Brightness threshold: pixels with luminance <= this are candidate background
BG_THRESHOLD = 80
# How many pixels to sample along each edge for seed points
EDGE_STEP = 2
# ---------------------------------------------------------------------------


def luminance(r: int, g: int, b: int) -> float:
    return 0.299 * r + 0.587 * g + 0.114 * b


def flood_fill_background(img: Image.Image) -> Image.Image:
    """Return image with dark background replaced by white."""
    src = img.convert('RGBA')
    w, h = src.size
    pix = src.load()

    # Build visited + is_bg arrays
    visited = [[False] * h for _ in range(w)]
    is_bg   = [[False] * h for _ in range(w)]

    queue: deque = deque()

    def seed(x: int, y: int):
        if visited[x][y]:
            return
        r, g, b, _a = pix[x, y]
        if luminance(r, g, b) <= BG_THRESHOLD:
            visited[x][y] = True
            is_bg[x][y]   = True
            queue.append((x, y))

    # Seed from all four edges
    for x in range(0, w, EDGE_STEP):
        seed(x, 0)
        seed(x, h - 1)
    for y in range(0, h, EDGE_STEP):
        seed(0, y)
        seed(w - 1, y)

    # BFS expand
    while queue:
        cx, cy = queue.popleft()
        for nx, ny in ((cx - 1, cy), (cx + 1, cy), (cx, cy - 1), (cx, cy + 1)):
            if 0 <= nx < w and 0 <= ny < h and not visited[nx][ny]:
                visited[nx][ny] = True
                r, g, b, _a = pix[nx, ny]
                if luminance(r, g, b) <= BG_THRESHOLD:
                    is_bg[nx][ny] = True
                    queue.append((nx, ny))

    # Replace background pixels with white, build result
    white = Image.new('RGBA', (w, h), (255, 255, 255, 255))
    mask  = Image.new('L', (w, h), 0)
    mask_pix = mask.load()
    for x in range(w):
        for y in range(h):
            if is_bg[x][y]:
                mask_pix[x, y] = 255  # 255 = use white bg

    result = Image.composite(white, src, mask)
    return result.convert('RGB')


def process(name: str, src_dir: str, dst_dir: str | None = None):
    path = os.path.join(src_dir, name)
    if not os.path.exists(path):
        print(f'  NOT FOUND: {path}')
        return
    img = Image.open(path)
    result = flood_fill_background(img)
    result.save(path, 'PNG')
    print(f'  processed -> {path}')
    if dst_dir:
        dst_path = os.path.join(dst_dir, name)
        if os.path.exists(dst_path):
            result.save(dst_path, 'PNG')
            print(f'  synced   -> {dst_path}')


if __name__ == '__main__':
    print(f'BG threshold = {BG_THRESHOLD}')
    for cn_name in [NAME_MAP[t] for t in TARGETS]:
        process(cn_name, IMG_DIR, DIST_DIR)
    print('Done.')
