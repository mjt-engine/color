import { builder } from "./builder";
export function opacity(color, ratio) {
    return builder({ color }).alpha(ratio).toString();
}
//# sourceMappingURL=opacity.js.map