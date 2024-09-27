function solution(wallpapers: string[]) {
  let minX: number | null = null;
  let maxX: number | null = null;
  let minY: number | null = null;
  let maxY: number | null = null;

  for (const [i, wallpaper] of wallpapers.entries()) {
    for (const [j, char] of [...wallpaper].entries()) {
      if (char === "#") {
        if (minX === null || minX > i) minX = i;
        if (minY === null || minY > j) minY = j;
        if (maxX === null || maxX < i) maxX = i;
        if (maxY === null || maxY < j) maxY = j;
      }
    }
  }

  return [minX, minY, maxX! + 1, maxY! + 1];
}
