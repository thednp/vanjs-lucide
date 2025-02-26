// VanJS Lucide - Strikethrough
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Strikethrough = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 4H9a3 3 0 0 0-2.83 4" }),
    path({ "d": "M14 12a4 4 0 0 1 0 8H6" }),
    line({ x1: "4", x2: "20", y1: "12", y2: "12" }),
  );
};
