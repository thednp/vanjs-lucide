// VanJS Lucide - GitPullRequestDraft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GitPullRequestDraft = (props: Partial<SVGProps> = {}) => {
  const { circle, path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "18", cy: "18", "r": "3" }),
    circle({ cx: "6", cy: "6", "r": "3" }),
    path({ "d": "M18 6V5" }),
    path({ "d": "M18 11v-1" }),
    line({ x1: "6", x2: "6", y1: "9", y2: "21" }),
  );
};
