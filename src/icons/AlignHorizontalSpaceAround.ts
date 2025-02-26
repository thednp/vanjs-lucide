// VanJS Lucide - AlignHorizontalSpaceAround
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignHorizontalSpaceAround = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "10", "x": "9", "y": "7", rx: "2" }),
    path({ "d": "M4 22V2" }),
    path({ "d": "M20 22V2" }),
  );
};
