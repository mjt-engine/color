import { ColorLike } from "./ColorTypes";
import { builder } from "./builder";

export function rotateHue(color: ColorLike, ratio: number): string {
  return builder({ color })
    .rotate(ratio * 360)
    .toString();
}
