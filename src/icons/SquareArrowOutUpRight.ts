// VanJS Lucide - SquareArrowOutUpRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareArrowOutUpRight = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" }),
    path({ "d": "m21 3-9 9" }),
    path({ "d": "M15 3h6v6" }),
  );
};
