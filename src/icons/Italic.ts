// VanJS Lucide - Italic
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Italic = (props: Partial<SVGProps> = {}) => {
  const { line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "19", x2: "10", y1: "4", y2: "4" }),
    line({ x1: "14", x2: "5", y1: "20", y2: "20" }),
    line({ x1: "15", x2: "9", y1: "4", y2: "20" }),
  );
};
