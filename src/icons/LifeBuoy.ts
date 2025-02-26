// VanJS Lucide - LifeBuoy
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const LifeBuoy = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m4.93 4.93 4.24 4.24" }),
    path({ "d": "m14.83 9.17 4.24-4.24" }),
    path({ "d": "m14.83 14.83 4.24 4.24" }),
    path({ "d": "m9.17 14.83-4.24 4.24" }),
    circle({ cx: "12", cy: "12", "r": "4" }),
  );
};
