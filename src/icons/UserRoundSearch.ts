// VanJS Lucide - UserRoundSearch
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const UserRoundSearch = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "10", cy: "8", "r": "5" }),
    path({ "d": "M2 21a8 8 0 0 1 10.434-7.62" }),
    circle({ cx: "18", cy: "18", "r": "3" }),
    path({ "d": "m22 22-1.9-1.9" }),
  );
};
