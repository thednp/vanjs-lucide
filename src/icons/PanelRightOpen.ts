// VanJS Lucide - PanelRightOpen
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const PanelRightOpen = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M15 3v18" }),
    path({ "d": "m10 15-3-3 3-3" }),
  );
};
