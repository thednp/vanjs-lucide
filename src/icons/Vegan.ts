// VanJS Lucide - Vegan
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Vegan = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 8q6 0 6-6-6 0-6 6" }),
    path({ "d": "M17.41 3.59a10 10 0 1 0 3 3" }),
    path({ "d": "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" }),
  );
};
