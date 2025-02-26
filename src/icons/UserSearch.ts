// VanJS Lucide - UserSearch
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const UserSearch = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "10", cy: "7", "r": "4" }),
    path({ "d": "M10.3 15H7a4 4 0 0 0-4 4v2" }),
    circle({ cx: "17", cy: "17", "r": "3" }),
    path({ "d": "m21 21-1.9-1.9" }),
  );
};
