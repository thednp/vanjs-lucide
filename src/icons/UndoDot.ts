// VanJS Lucide - UndoDot
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const UndoDot = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 17a9 9 0 0 0-15-6.7L3 13" }),
    path({ "d": "M3 7v6h6" }),
    circle({ cx: "12", cy: "17", "r": "1" }),
  );
};
