// VanJS Lucide - GripVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GripVertical = (props: Partial<SVGProps> = {}) => {
  const { circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "9", cy: "12", "r": "1" }),
    circle({ cx: "9", cy: "5", "r": "1" }),
    circle({ cx: "9", cy: "19", "r": "1" }),
    circle({ cx: "15", cy: "12", "r": "1" }),
    circle({ cx: "15", cy: "5", "r": "1" }),
    circle({ cx: "15", cy: "19", "r": "1" }),
  );
};
