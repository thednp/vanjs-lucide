// VanJS Lucide - CirclePercent
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CirclePercent = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m15 9-6 6" }),
    path({ "d": "M9 9h.01" }),
    path({ "d": "M15 15h.01" }),
  );
};
