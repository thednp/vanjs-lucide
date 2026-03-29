// VanJS Lucide - GitBranchMinus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const GitBranchMinus = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M15 6a9 9 0 0 0-9 9V3" }),
    path({ "d": "M21 18h-6" }),
    circle({
      cx: "18",
      cy: "6",
      "r": "3",
    }),
    circle({
      cx: "6",
      cy: "18",
      "r": "3",
    }),
  );
};
