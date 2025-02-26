// VanJS Lucide - CopyMinus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CopyMinus = (props: Partial<SVGProps> = {}) => {
  const { line, rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "12", x2: "18", y1: "15", y2: "15" }),
    rect({ width: "14", height: "14", "x": "8", "y": "8", rx: "2", ry: "2" }),
    path({ "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }),
  );
};
