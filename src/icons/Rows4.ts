// VanJS Lucide - Rows4
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Rows4 = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M21 7.5H3" }),
    path({ "d": "M21 12H3" }),
    path({ "d": "M21 16.5H3" }),
  );
};
