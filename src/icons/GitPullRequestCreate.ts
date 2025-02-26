// VanJS Lucide - GitPullRequestCreate
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GitPullRequestCreate = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "6", cy: "6", "r": "3" }),
    path({ "d": "M6 9v12" }),
    path({ "d": "M13 6h3a2 2 0 0 1 2 2v3" }),
    path({ "d": "M18 15v6" }),
    path({ "d": "M21 18h-6" }),
  );
};
