// VanJS Lucide - Hash
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Hash = (props: Partial<SVGProps> = {}) => {
  const { line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "4", x2: "20", y1: "9", y2: "9" }),
    line({ x1: "4", x2: "20", y1: "15", y2: "15" }),
    line({ x1: "10", x2: "8", y1: "3", y2: "21" }),
    line({ x1: "16", x2: "14", y1: "3", y2: "21" }),
  );
};
