// import Vibrant from "node-vibrant";

export const palletteFrom = async (
  src: string | HTMLImageElement,
  options: {
    colorCount?: number;
    quality?: number; // 0 i highest
  }
) => {
  const { colorCount = 64, quality = 5 } = options;
  // const vibrant = Vibrant.from(src).maxColorCount(colorCount).quality(quality);
  // return vibrant.getPalette();
  throw new Error(
    "node-vibrant does dirty worker shenanigans on load, find simpler alternative"
  );
};
