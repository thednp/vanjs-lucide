// VanJS Lucide - Variable
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Variable = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 21s-4-3-4-9 4-9 4-9" }),
    path({ "d": "M16 3s4 3 4 9-4 9-4 9" }),
    line({ x1: "15", x2: "9", y1: "9", y2: "15" }),
    line({ x1: "9", x2: "15", y1: "9", y2: "15" }),
  );
};
