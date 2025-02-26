// VanJS Lucide - AlignVerticalDistributeCenter
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignVerticalDistributeCenter = (
  props: Partial<SVGProps> = {},
) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 17h-3" }),
    path({ "d": "M22 7h-5" }),
    path({ "d": "M5 17H2" }),
    path({ "d": "M7 7H2" }),
    rect({ "x": "5", "y": "14", width: "14", height: "6", rx: "2" }),
    rect({ "x": "7", "y": "4", width: "10", height: "6", rx: "2" }),
  );
};
