// VanJS Lucide - GitBranchPlus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GitBranchPlus = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 3v12" }),
    path({ "d": "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }),
    path({ "d": "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }),
    path({ "d": "M15 6a9 9 0 0 0-9 9" }),
    path({ "d": "M18 15v6" }),
    path({ "d": "M21 18h-6" }),
  );
};
