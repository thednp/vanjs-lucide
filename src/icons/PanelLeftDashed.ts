// VanJS Lucide - PanelLeftDashed
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const PanelLeftDashed = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M9 14v1" }),
    path({ "d": "M9 19v2" }),
    path({ "d": "M9 3v2" }),
    path({ "d": "M9 9v1" }),
  );
};
