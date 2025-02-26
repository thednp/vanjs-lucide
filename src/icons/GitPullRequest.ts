// VanJS Lucide - GitPullRequest
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GitPullRequest = (props: Partial<SVGProps> = {}) => {
  const { circle, path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "18", cy: "18", "r": "3" }),
    circle({ cx: "6", cy: "6", "r": "3" }),
    path({ "d": "M13 6h3a2 2 0 0 1 2 2v7" }),
    line({ x1: "6", x2: "6", y1: "9", y2: "21" }),
  );
};
