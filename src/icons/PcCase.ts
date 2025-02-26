// VanJS Lucide - PcCase
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const PcCase = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "20", "x": "5", "y": "2", rx: "2" }),
    path({ "d": "M15 14h.01" }),
    path({ "d": "M9 6h6" }),
    path({ "d": "M9 10h6" }),
  );
};
