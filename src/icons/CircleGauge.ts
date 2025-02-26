// VanJS Lucide - CircleGauge
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleGauge = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15.6 2.7a10 10 0 1 0 5.7 5.7" }),
    circle({ cx: "12", cy: "12", "r": "2" }),
    path({ "d": "M13.4 10.6 19 5" }),
  );
};
