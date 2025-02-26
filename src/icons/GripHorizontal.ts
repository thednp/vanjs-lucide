// VanJS Lucide - GripHorizontal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GripHorizontal = (props: Partial<SVGProps> = {}) => {
  const { circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "9", "r": "1" }),
    circle({ cx: "19", cy: "9", "r": "1" }),
    circle({ cx: "5", cy: "9", "r": "1" }),
    circle({ cx: "12", cy: "15", "r": "1" }),
    circle({ cx: "19", cy: "15", "r": "1" }),
    circle({ cx: "5", cy: "15", "r": "1" }),
  );
};
