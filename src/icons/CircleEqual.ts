// VanJS Lucide - CircleEqual
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleEqual = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 10h10" }),
    path({ "d": "M7 14h10" }),
    circle({ cx: "12", cy: "12", "r": "10" }),
  );
};
