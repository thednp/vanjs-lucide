// VanJS Lucide - AlignHorizontalDistributeStart
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignHorizontalDistributeStart = (
  props: Partial<SVGProps> = {},
) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "14", "x": "4", "y": "5", rx: "2" }),
    rect({ width: "6", height: "10", "x": "14", "y": "7", rx: "2" }),
    path({ "d": "M4 2v20" }),
    path({ "d": "M14 2v20" }),
  );
};
