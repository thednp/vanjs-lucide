// VanJS Lucide - CircleOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleOff = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M8.35 2.69A10 10 0 0 1 21.3 15.65" }),
    path({ "d": "M19.08 19.08A10 10 0 1 1 4.92 4.92" }),
  );
};
