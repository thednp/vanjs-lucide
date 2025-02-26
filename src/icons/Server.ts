// VanJS Lucide - Server
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Server = (props: Partial<SVGProps> = {}) => {
  const { rect, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "8", "x": "2", "y": "2", rx: "2", ry: "2" }),
    rect({ width: "20", height: "8", "x": "2", "y": "14", rx: "2", ry: "2" }),
    line({ x1: "6", x2: "6.01", y1: "6", y2: "6" }),
    line({ x1: "6", x2: "6.01", y1: "18", y2: "18" }),
  );
};
