// VanJS Lucide - ChevronsDownUp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ChevronsDownUp = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m7 20 5-5 5 5" }),
    path({ "d": "m7 4 5 5 5-5" }),
  );
};
