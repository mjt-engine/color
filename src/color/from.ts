import { ColorBuilder, ColorLike } from "./ColorTypes";
import { builder } from "./builder";

export const from = (color: ColorLike): ColorBuilder => {
  return builder({ color });
};
