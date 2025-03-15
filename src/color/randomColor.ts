import QixColor from "color";

export function randomColor(random: () => number = Math.random): string {
  return QixColor.rgb([
    255 * random(),
    255 * random(),
    255 * random(),
  ]).toString();
}
