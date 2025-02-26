// VanJS Lucide - EqualNot
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const EqualNot = (props: Partial<SVGProps> = {}) => {
  const { line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "5", x2: "19", y1: "9", y2: "9" }),
    line({ x1: "5", x2: "19", y1: "15", y2: "15" }),
    line({ x1: "19", x2: "5", y1: "5", y2: "19" }),
  );
};
