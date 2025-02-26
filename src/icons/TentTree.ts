// VanJS Lucide - TentTree
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TentTree = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "4", cy: "4", "r": "2" }),
    path({ "d": "m14 5 3-3 3 3" }),
    path({ "d": "m14 10 3-3 3 3" }),
    path({ "d": "M17 14V2" }),
    path({ "d": "M17 14H7l-5 8h20Z" }),
    path({ "d": "M8 14v8" }),
    path({ "d": "m9 14 5 8" }),
  );
};
