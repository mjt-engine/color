import { ColorLike } from "./ColorTypes";
import { builder } from "./builder";

export function saturate(color: ColorLike, ratio: number): string {
  return builder({ color }).saturate(ratio).toString();
}
