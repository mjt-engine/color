import { builder } from "./builder";
import { clamp } from "./clamp";
import { textColor } from "./textColor";
export function isLut(maybe) {
    return (maybe !== null &&
        typeof maybe === "object" &&
        "color" in maybe &&
        typeof maybe["color"] === "function" &&
        "text" in maybe &&
        typeof maybe["text"] === "function");
}
function expandColors(colors, level = 0) {
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
function create(colors, levels = 8) {
    if (isLut(colors)) {
        return colors;
    }
    const expandedColors = expandColors(colors.map((color) => builder({ color })), levels);
    // .map((c) => c.hex());
    const lut = {
        s12: (numerator) => {
            return lut.color(numerator / 12);
        },
        s12t: (numerator) => {
            return lut.text(numerator / 12);
        },
        color: (alpha) => {
            alpha = clamp(alpha, 0, 1);
            const idx = clamp(Math.floor(alpha * expandedColors.length), 0, expandedColors.length - 1);
            return expandedColors[idx].toString();
        },
        text: (alpha) => {
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
//# sourceMappingURL=Luts.js.map