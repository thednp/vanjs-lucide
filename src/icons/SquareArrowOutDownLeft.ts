// VanJS Lucide - SquareArrowOutDownLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareArrowOutDownLeft = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" }),
    path({ "d": "m3 21 9-9" }),
    path({ "d": "M9 21H3v-6" }),
  );
};
