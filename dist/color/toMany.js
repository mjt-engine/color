// --- private ---
export const toMany = (input) => {
    if (Array.isArray(input)) {
        return input;
    }
    return [input];
};
//# sourceMappingURL=toMany.js.map