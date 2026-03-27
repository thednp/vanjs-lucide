// VanJS Lucide - ChevronsUp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ChevronsUp = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m17 11-5-5-5 5" }),
    path({ "d": "m17 18-5-5-5 5" }),
  );
};
