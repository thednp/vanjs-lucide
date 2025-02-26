// VanJS Lucide - SearchCheck
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SearchCheck = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m8 11 2 2 4-4" }),
    circle({ cx: "11", cy: "11", "r": "8" }),
    path({ "d": "m21 21-4.3-4.3" }),
  );
};
