// VanJS Lucide - LayoutDashboard
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const LayoutDashboard = (props: Partial<SVGProps> = {}) => {
  const { rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "7", height: "9", "x": "3", "y": "3", rx: "1" }),
    rect({ width: "7", height: "5", "x": "14", "y": "3", rx: "1" }),
    rect({ width: "7", height: "9", "x": "14", "y": "12", rx: "1" }),
    rect({ width: "7", height: "5", "x": "3", "y": "16", rx: "1" }),
  );
};
