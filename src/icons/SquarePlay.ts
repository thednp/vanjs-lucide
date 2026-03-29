// VanJS Lucide - SquarePlay
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const SquarePlay = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    rect({
      "x": "3",
      "y": "3",
      width: "18",
      height: "18",
      rx: "2",
    }),
    path({
      "d":
        "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
    }),
  );
};
