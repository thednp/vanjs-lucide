// VanJS Lucide - ChartScatter
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChartScatter = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "7.5", cy: "7.5", "r": ".5", fill: "currentColor" }),
    circle({ cx: "18.5", cy: "5.5", "r": ".5", fill: "currentColor" }),
    circle({ cx: "11.5", cy: "11.5", "r": ".5", fill: "currentColor" }),
    circle({ cx: "7.5", cy: "16.5", "r": ".5", fill: "currentColor" }),
    circle({ cx: "17.5", cy: "14.5", "r": ".5", fill: "currentColor" }),
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
  );
};
