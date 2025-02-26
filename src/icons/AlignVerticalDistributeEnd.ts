// VanJS Lucide - AlignVerticalDistributeEnd
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignVerticalDistributeEnd = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "6", "x": "5", "y": "14", rx: "2" }),
    rect({ width: "10", height: "6", "x": "7", "y": "4", rx: "2" }),
    path({ "d": "M2 20h20" }),
    path({ "d": "M2 10h20" }),
  );
};
