// VanJS Lucide - CirclePlay
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CirclePlay = (props: Partial<SVGProps> = {}) => {
  const { circle, polygon } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polygon({ points: "10 8 16 12 10 16 10 8" }),
  );
};
