// VanJS Lucide - SearchCode
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SearchCode = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m13 13.5 2-2.5-2-2.5" }),
    path({ "d": "m21 21-4.3-4.3" }),
    path({ "d": "M9 8.5 7 11l2 2.5" }),
    circle({ cx: "11", cy: "11", "r": "8" }),
  );
};
