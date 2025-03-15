import QixColor from "color";
export function randomColor(random = Math.random) {
    return QixColor.rgb([
        255 * random(),
        255 * random(),
        255 * random(),
    ]).toString();
}
//# sourceMappingURL=randomColor.js.map