// VanJS Lucide - UserRound
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const UserRound = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "8", "r": "5" }),
    path({ "d": "M20 21a8 8 0 0 0-16 0" }),
  );
};
