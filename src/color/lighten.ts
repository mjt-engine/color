import { ColorLike } from "./ColorTypes";
import { builder } from "./builder";

export function lighten(color: ColorLike, ratio: number): string {
  return builder({ color }).lighten(ratio).toString();
}
