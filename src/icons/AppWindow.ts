// VanJS Lucide - AppWindow
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AppWindow = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "2", "y": "4", width: "20", height: "16", rx: "2" }),
    path({ "d": "M10 4v4" }),
    path({ "d": "M2 8h20" }),
    path({ "d": "M6 4v4" }),
  );
};
