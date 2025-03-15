import { builder } from "./builder";
import { clamp } from "./clamp";
import { ColorBuilder, ColorLike } from "./ColorTypes";
import { textColor } from "./textColor";

export function isLut(maybe: unknown): maybe is Lut {
  return (
    maybe !== null &&
    typeof maybe === "object" &&
    "color" in maybe &&
    typeof maybe["color"] === "function" &&
    "text" in maybe &&
    typeof maybe["text"] === "function"
  );
}

export type Lut = {
  s12: (numerator: number) => string;
  s12t: (numerator: number, beta?: number) => string;
  color: (alpha: number) => string;
  text: (alpha: number) => string;
};

function expandColors(
  colors: ColorBuilder[],
  level: number = 0
): ColorBuilder[] {
  if (level <= 0) {
    return colors;
  }
  const expanded = colors.flatMap((c, idx, arr) => {
    if (idx === arr.length - 1) {
      return [c];
    }
    const next = arr[idx + 1];
    return [c, c.mix(next)];
  });
  return expandColors(expanded, level - 1);
}

function create(colors: ColorLike[] | Lut, levels: number = 8): Lut {
  if (isLut(colors)) {
    return colors;
  }
  const expandedColors = expandColors(
    colors.map((color) => builder({ color })),
    levels
  );
  // .map((c) => c.hex());
  const lut: Lut = {
    s12: (numerator) => {
      return lut.color(numerator / 12);
    },
    s12t: (numerator) => {
      return lut.text(numerator / 12);
    },
    color: (alpha: number) => {
      alpha = clamp(alpha, 0, 1);
      const idx = clamp(
        Math.floor(alpha * expandedColors.length),
        0,
        expandedColors.length - 1
      );
      return expandedColors[idx].toString();
    },
    text: (alpha: number) => {
      const color = lut.color(alpha);
      return textColor([color]);
    },
  };
  return lut;
}

export const Luts = {
  create,
  expandColors,
};
