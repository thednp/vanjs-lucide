// VanJS Lucide - Menu
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Menu = (props: Partial<SVGProps> = {}) => {
  const { line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "4", x2: "20", y1: "12", y2: "12" }),
    line({ x1: "4", x2: "20", y1: "6", y2: "6" }),
    line({ x1: "4", x2: "20", y1: "18", y2: "18" }),
  );
};
