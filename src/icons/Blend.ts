// VanJS Lucide - Blend
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Blend = (props: Partial<SVGProps> = {}) => {
  const { circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "9", cy: "9", "r": "7" }),
    circle({ cx: "15", cy: "15", "r": "7" }),
  );
};
