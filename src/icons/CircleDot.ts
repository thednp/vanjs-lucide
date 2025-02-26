// VanJS Lucide - CircleDot
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleDot = (props: Partial<SVGProps> = {}) => {
  const { circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    circle({ cx: "12", cy: "12", "r": "1" }),
  );
};
