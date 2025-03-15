import { builder } from "./builder";
export function rotateHue(color, ratio) {
    return builder({ color })
        .rotate(ratio * 360)
        .toString();
}
//# sourceMappingURL=rotateHue.js.map