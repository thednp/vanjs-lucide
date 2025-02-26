// VanJS Lucide - Waypoints
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Waypoints = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "4.5", "r": "2.5" }),
    path({ "d": "m10.2 6.3-3.9 3.9" }),
    circle({ cx: "4.5", cy: "12", "r": "2.5" }),
    path({ "d": "M7 12h10" }),
    circle({ cx: "19.5", cy: "12", "r": "2.5" }),
    path({ "d": "m13.8 17.7 3.9-3.9" }),
    circle({ cx: "12", cy: "19.5", "r": "2.5" }),
  );
};
