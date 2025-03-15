import { ColorBuilder } from "./ColorTypes";
export declare function textColor(colors: string[], threshold?: number): string;
export declare function _subtleTextColorContrast({ color, threshold, steps, }: {
    color: string;
    threshold: number;
    steps?: number;
}): [ColorBuilder, number];
