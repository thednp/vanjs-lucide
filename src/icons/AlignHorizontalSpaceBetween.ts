// VanJS Lucide - AlignHorizontalSpaceBetween
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignHorizontalSpaceBetween = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "14", "x": "3", "y": "5", rx: "2" }),
    rect({ width: "6", height: "10", "x": "15", "y": "7", rx: "2" }),
    path({ "d": "M3 2v20" }),
    path({ "d": "M21 2v20" }),
  );
};
