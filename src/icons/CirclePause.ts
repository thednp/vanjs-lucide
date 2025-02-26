// VanJS Lucide - CirclePause
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CirclePause = (props: Partial<SVGProps> = {}) => {
  const { circle, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    line({ x1: "10", x2: "10", y1: "15", y2: "9" }),
    line({ x1: "14", x2: "14", y1: "15", y2: "9" }),
  );
};
