// VanJS Lucide - PanelLeftClose
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const PanelLeftClose = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M9 3v18" }),
    path({ "d": "m16 15-3-3 3-3" }),
  );
};
