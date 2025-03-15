import { ColorLike } from "./ColorTypes";
import { builder } from "./builder";

export function opacity(color: ColorLike, ratio: number): string {
  return builder({ color }).alpha(ratio).toString();
}
