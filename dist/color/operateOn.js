import { Objects } from "@mjt-engine/object";
import { Colors } from "./Colors";
export const operateOn = (spec = {}) => {
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
//# sourceMappingURL=operateOn.js.map