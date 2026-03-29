// VanJS Lucide - SquareStop
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const SquareStop = (props: Partial<SVGProps> = {}) => {
  const { rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    rect({
      width: "18",
      height: "18",
      "x": "3",
      "y": "3",
      rx: "2",
    }),
    rect({
      "x": "9",
      "y": "9",
      width: "6",
      height: "6",
      rx: "1",
    }),
  );
};
