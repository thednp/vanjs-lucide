// VanJS Lucide - SpellCheck
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SpellCheck = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m6 16 6-12 6 12" }),
    path({ "d": "M8 12h8" }),
    path({ "d": "m16 20 2 2 4-4" }),
  );
};
