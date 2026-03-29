// VanJS Lucide - SquarePause
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const SquarePause = (props: Partial<SVGProps> = {}) => {
  const { rect, line } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    rect({
      width: "18",
      height: "18",
      "x": "3",
      "y": "3",
      rx: "2",
    }),
    line({
      x1: "10",
      x2: "10",
      y1: "15",
      y2: "9",
    }),
    line({
      x1: "14",
      x2: "14",
      y1: "15",
      y2: "9",
    }),
  );
};
