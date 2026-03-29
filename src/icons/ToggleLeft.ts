// VanJS Lucide - ToggleLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ToggleLeft = (props: Partial<SVGProps> = {}) => {
  const { circle, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    circle({
      cx: "9",
      cy: "12",
      "r": "3",
    }),
    rect({
      width: "20",
      height: "14",
      "x": "2",
      "y": "5",
      rx: "7",
    }),
  );
};
