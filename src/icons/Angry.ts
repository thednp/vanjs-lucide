// VanJS Lucide - Angry
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Angry = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M16 16s-1.5-2-4-2-4 2-4 2" }),
    path({ "d": "M7.5 8 10 9" }),
    path({ "d": "m14 9 2.5-1" }),
    path({ "d": "M9 10h.01" }),
    path({ "d": "M15 10h.01" }),
  );
};
