// VanJS Lucide - SignpostBig
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SignpostBig = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 9H4L2 7l2-2h6" }),
    path({ "d": "M14 5h6l2 2-2 2h-6" }),
    path({ "d": "M10 22V4a2 2 0 1 1 4 0v18" }),
    path({ "d": "M8 22h8" }),
  );
};
