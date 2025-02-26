// VanJS Lucide - MarsStroke
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MarsStroke = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m14 6 4 4" }),
    path({ "d": "M17 3h4v4" }),
    path({ "d": "m21 3-7.75 7.75" }),
    circle({ cx: "9", cy: "15", "r": "6" }),
  );
};
