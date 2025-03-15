import { ColorLike } from "./ColorTypes";
import { builder } from "./builder";


export function toRgbInteger(color: ColorLike): number {
  return builder({ color }).rgbNumber();
}
