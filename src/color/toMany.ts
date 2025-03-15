// --- private ---

export const toMany = <T>(input: T): T[] => {
  if (Array.isArray(input)) {
    return input;
  }
  return [input];
};
