// VanJS Lucide - AppWindowMac
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AppWindowMac = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "16", "x": "2", "y": "4", rx: "2" }),
    path({ "d": "M6 8h.01" }),
    path({ "d": "M10 8h.01" }),
    path({ "d": "M14 8h.01" }),
  );
};
