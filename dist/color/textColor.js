import { builder } from "./builder";
import { Luts } from "./Luts";
import { Colors } from "./Colors";
export function textColor(colors, threshold = 4.5) {
    const textColors = colors.map((color) => _subtleTextColorContrast({ color, threshold }));
    const sorted = textColors
        .sort((a, b) => {
        const [aColor, aContrast] = a;
        const [bColor, bContrast] = b;
        if (aContrast === bContrast) {
            return 0;
        }
        return aContrast > bContrast ? 1 : -1;
    })
        .map((colorContrast) => colorContrast[0]);
    return sorted[0]?.toString();
}
export function _subtleTextColorContrast({ color, threshold = 4.5, steps = 12, }) {
    const BW_LUT = Luts.create(["black", "white"]);
    const WB_LUT = Luts.create(["white", "black"]);
    const backgroundColor = builder({ color });
    let bestBlack = Colors.from("black");
    let bestBlackContrast = 1000;
    for (let i = 0; i < steps; i++) {
        const stepedColor = builder({
            color: BW_LUT.color((i / steps) * 0.5),
        });
        const contrast = stepedColor.contrast(backgroundColor);
        if (contrast > threshold && contrast < bestBlackContrast) {
            bestBlack = stepedColor;
            bestBlackContrast = contrast;
        }
    }
    let bestWhite = Colors.from("white");
    let bestWhiteContrast = 1000;
    for (let i = 0; i < steps; i++) {
        const stepedColor = builder({
            color: WB_LUT.color((i / steps) * 0.5),
        });
        const contrast = stepedColor.contrast(backgroundColor);
        if (contrast > threshold && contrast < bestWhiteContrast) {
            bestWhite = stepedColor;
            bestWhiteContrast = contrast;
        }
    }
    if (bestWhiteContrast < bestBlackContrast) {
        return [bestWhite, bestWhiteContrast];
    }
    return [bestBlack, bestBlackContrast];
}
//# sourceMappingURL=textColor.js.map