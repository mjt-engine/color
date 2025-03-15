import { ColorBuilder, ColorLike } from "./ColorTypes";
export declare function isLut(maybe: unknown): maybe is Lut;
export type Lut = {
    s12: (numerator: number) => string;
    s12t: (numerator: number, beta?: number) => string;
    color: (alpha: number) => string;
    text: (alpha: number) => string;
};
declare function expandColors(colors: ColorBuilder[], level?: number): ColorBuilder[];
declare function create(colors: ColorLike[] | Lut, levels?: number): Lut;
export declare const Luts: {
    create: typeof create;
    expandColors: typeof expandColors;
};
export {};
