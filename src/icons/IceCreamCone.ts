// VanJS Lucide - IceCreamCone
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const IceCreamCone = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" }),
    path({ "d": "M17 7A5 5 0 0 0 7 7" }),
    path({ "d": "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" }),
  );
};
