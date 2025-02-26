// VanJS Lucide - Gavel
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Gavel = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" }),
    path({ "d": "m16 16 6-6" }),
    path({ "d": "m8 8 6-6" }),
    path({ "d": "m9 7 8 8" }),
    path({ "d": "m21 11-8-8" }),
  );
};
