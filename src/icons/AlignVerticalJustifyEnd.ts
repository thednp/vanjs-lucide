// VanJS Lucide - AlignVerticalJustifyEnd
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignVerticalJustifyEnd = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "6", "x": "5", "y": "12", rx: "2" }),
    rect({ width: "10", height: "6", "x": "7", "y": "2", rx: "2" }),
    path({ "d": "M2 22h20" }),
  );
};
