export function deg2rad(deg: number = 0): number {
  return (deg * Math.PI) / 180;
}
export function rad2deg(rad: number = 0): number {
  return (rad * 180) / Math.PI;
}

export function pol2car(
  angle: number,
  radius: number,
  radius2: number | null = null
) {
  const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
  const y = Math.sin((angle - 90) * (Math.PI / 180)) * (radius2 || radius);
  return {
    x,
    y,
  };
}

export const rgb = (r, g, b, a = 1) => `rgb(${r},${g}%,${b}%,${a})`;
export const hsl = (h, s, l = 50, a = 1) => `hsl(${h},${s}%,${l}%,${a})`;

export function remap(
  value: number,
  start1: number,
  stop1: number,
  start2: number,
  stop2: number
): number {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

export function seq(
  count: number,
  step: number | ((current: number) => any) = 1,
  start: number = 0
) {
  return Array.from({ length: count }).map((_, i) =>
    typeof step === "function" ? step(i + start) : i * step + start
  );
}

export function range(from: number, to: number, step: number = 1): number[] {
  const reversed = to < from;
  if (reversed) {
    [to, from] = [from, to];
  }
  const length = Math.floor((to - from) / step) + 1;
  const output = seq(length, step, from);
  return reversed ? output.reverse() : output;
}

export const snap = (val, step) => Math.round(val / step) * step;

export const translate = (x, y) => `translate(${x} ${y})`;
export const rotate = (deg) => `rotate(${deg})`;
export const scale = (s1, s2) => `scale(${s1} ${s2})`;

export const area2radius = (area) => Math.sqrt(area / Math.PI);

export const random = (min: number = 0, max: number = 1) => {
  return min + Math.random() * (max - min);
};

export const randomint = (min: number, max: number) => {
  return Math.floor(random(min, max));
};
