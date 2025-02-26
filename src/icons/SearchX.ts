// VanJS Lucide - SearchX
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SearchX = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m13.5 8.5-5 5" }),
    path({ "d": "m8.5 8.5 5 5" }),
    circle({ cx: "11", cy: "11", "r": "8" }),
    path({ "d": "m21 21-4.3-4.3" }),
  );
};
