import { ColorLike } from "./ColorTypes";
import { builder } from "./builder";

export function desaturate(color: ColorLike, ratio: number): string {
  return builder({ color }).desaturate(ratio).toString();
}
