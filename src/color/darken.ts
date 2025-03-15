import { ColorLike } from "./ColorTypes";
import { builder } from "./builder";

export function darken(color: ColorLike, ratio: number): string {
  return builder({ color }).darken(ratio).toString();
}
