// VanJS Lucide - Frame
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Frame = (props: Partial<SVGProps> = {}) => {
  const { line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "22", x2: "2", y1: "6", y2: "6" }),
    line({ x1: "22", x2: "2", y1: "18", y2: "18" }),
    line({ x1: "6", x2: "6", y1: "2", y2: "22" }),
    line({ x1: "18", x2: "18", y1: "2", y2: "22" }),
  );
};
