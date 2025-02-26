// VanJS Lucide - Ungroup
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Ungroup = (props: Partial<SVGProps> = {}) => {
  const { rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "6", "x": "5", "y": "4", rx: "1" }),
    rect({ width: "8", height: "6", "x": "11", "y": "14", rx: "1" }),
  );
};
