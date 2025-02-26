// VanJS Lucide - AlignHorizontalDistributeCenter
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignHorizontalDistributeCenter = (
  props: Partial<SVGProps> = {},
) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "14", "x": "4", "y": "5", rx: "2" }),
    rect({ width: "6", height: "10", "x": "14", "y": "7", rx: "2" }),
    path({ "d": "M17 22v-5" }),
    path({ "d": "M17 7V2" }),
    path({ "d": "M7 22v-3" }),
    path({ "d": "M7 5V2" }),
  );
};
