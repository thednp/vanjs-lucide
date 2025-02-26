// VanJS Lucide - GitPullRequestClosed
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GitPullRequestClosed = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "6", cy: "6", "r": "3" }),
    path({ "d": "M6 9v12" }),
    path({ "d": "m21 3-6 6" }),
    path({ "d": "m21 9-6-6" }),
    path({ "d": "M18 11.5V15" }),
    circle({ cx: "18", cy: "18", "r": "3" }),
  );
};
