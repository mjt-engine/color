import { ColorLike, ColorModel, ColorBuilder } from "./ColorTypes";
import QixColor from "color";

export function builder({
  color,
  model = "hsl",
}: {
  color?: ColorLike;
  model?: ColorModel;
}): ColorBuilder {
  if (color === undefined) {
    return new QixColor();
  }

  if (typeof color === "string") {
    return new QixColor(color);
  }

  if (!Array.isArray(color)) {
    return color as ColorBuilder;
  }

  switch (model) {
    case "rgb": {
      return QixColor.rgb(color[0], color[1], color[2]);
    }
    case "hsl": {
      return QixColor.hsl(color[0], color[1], color[2]);
    }
    case "hsla": {
      return QixColor.hsl(color[0], color[1], color[2]).alpha(color[3] ?? 1);
    }
    case "rgba": {
      return QixColor.rgb(color[0], color[1], color[2]).alpha(color[3] ?? 1);
    }
    default: {
      throw new Error(`Unknown color Model: ${model}`);
    }
  }
}
