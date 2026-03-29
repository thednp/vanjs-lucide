// VanJS Lucide - Turntable
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Turntable = (props: Partial<SVGProps> = {}) => {
  const { path, circle, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10 12.01h.01" }),
    path({ "d": "M18 8v4a8 8 0 0 1-1.07 4" }),
    circle({
      cx: "10",
      cy: "12",
      "r": "4",
    }),
    rect({
      "x": "2",
      "y": "4",
      width: "20",
      height: "16",
      rx: "2",
    }),
  );
};
