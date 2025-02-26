// VanJS Lucide - AlignVerticalSpaceAround
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignVerticalSpaceAround = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "10", height: "6", "x": "7", "y": "9", rx: "2" }),
    path({ "d": "M22 20H2" }),
    path({ "d": "M22 4H2" }),
  );
};
