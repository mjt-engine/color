import { builder } from "./builder";
export function toCss(color, model) {
    return builder({ color, model }).hsl().string();
}
//# sourceMappingURL=toCss.js.map