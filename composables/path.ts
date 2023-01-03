export function polygonpath(
  points: [number, number][],
  closed: boolean = false
): string {
  const [startX, startY] = points.shift() || [0, 0];

  const path = [
    "M",
    `${startX || 0},${startY}`,
    ...points.map(([x, y]) => `L ${x},${y}`),
    closed ? "Z" : "",
  ]
    .join(" ")
    .trim();

  return path;
}

export const arcpath = (
  start,
  stop,
  inner = 0,
  outer = 100,
  corner = 0,
  padding = 0
) =>
  arcPath()
    .padAngle(0)
    .startAngle(deg2rad(start))
    .endAngle(deg2rad(stop))
    .innerRadius(inner)
    .outerRadius(outer)
    .cornerRadius(corner)
    .padAngle(deg2rad(padding))();
