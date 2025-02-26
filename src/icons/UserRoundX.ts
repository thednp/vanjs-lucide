// VanJS Lucide - UserRoundX
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const UserRoundX = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 21a8 8 0 0 1 11.873-7" }),
    circle({ cx: "10", cy: "8", "r": "5" }),
    path({ "d": "m17 17 5 5" }),
    path({ "d": "m22 17-5 5" }),
  );
};
