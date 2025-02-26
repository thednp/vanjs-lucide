// VanJS Lucide - GitCommitHorizontal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GitCommitHorizontal = (props: Partial<SVGProps> = {}) => {
  const { circle, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "3" }),
    line({ x1: "3", x2: "9", y1: "12", y2: "12" }),
    line({ x1: "15", x2: "21", y1: "12", y2: "12" }),
  );
};
