// VanJS Lucide - Equal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Equal = (props: Partial<SVGProps> = {}) => {
  const { line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "5", x2: "19", y1: "9", y2: "9" }),
    line({ x1: "5", x2: "19", y1: "15", y2: "15" }),
  );
};
