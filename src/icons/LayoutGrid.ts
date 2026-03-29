// VanJS Lucide - LayoutGrid
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const LayoutGrid = (props: Partial<SVGProps> = {}) => {
  const { rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    rect({
      width: "7",
      height: "7",
      "x": "3",
      "y": "3",
      rx: "1",
    }),
    rect({
      width: "7",
      height: "7",
      "x": "14",
      "y": "3",
      rx: "1",
    }),
    rect({
      width: "7",
      height: "7",
      "x": "14",
      "y": "14",
      rx: "1",
    }),
    rect({
      width: "7",
      height: "7",
      "x": "3",
      "y": "14",
      rx: "1",
    }),
  );
};
