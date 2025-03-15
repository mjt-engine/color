import { Objects } from "@mjt-engine/object";
import { Colors } from "./Colors";
import { ColorSpec } from "./ColorTypes";

export const operateOn = (spec: ColorSpec = {}): string => {
  let color = typeof spec.color === "string" ? spec.color : "grey";
  Objects.entries(spec).forEach(([operation, operand]) => {
    if (operation === "color") {
      return;
    }
    if (typeof operand === "number") {
      // @ts-ignore
      color = Colors[operation](color, operand);
    }
  });
  return color;
};
