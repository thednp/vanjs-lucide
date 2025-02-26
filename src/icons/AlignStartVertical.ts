// VanJS Lucide - AlignStartVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignStartVertical = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "9", height: "6", "x": "6", "y": "14", rx: "2" }),
    rect({ width: "16", height: "6", "x": "6", "y": "4", rx: "2" }),
    path({ "d": "M2 2v20" }),
  );
};
