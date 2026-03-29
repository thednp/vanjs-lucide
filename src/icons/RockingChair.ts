// VanJS Lucide - RockingChair
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const RockingChair = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m15 13 3.708 7.416" }),
    path({ "d": "M3 19a15 15 0 0 0 18 0" }),
    path({ "d": "m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18" }),
    path({ "d": "m9 13-3.708 7.416" }),
  );
};
