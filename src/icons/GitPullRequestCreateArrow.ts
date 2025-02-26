// VanJS Lucide - GitPullRequestCreateArrow
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GitPullRequestCreateArrow = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "5", cy: "6", "r": "3" }),
    path({ "d": "M5 9v12" }),
    path({ "d": "m15 9-3-3 3-3" }),
    path({ "d": "M12 6h5a2 2 0 0 1 2 2v3" }),
    path({ "d": "M19 15v6" }),
    path({ "d": "M22 18h-6" }),
  );
};
