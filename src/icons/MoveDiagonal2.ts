// VanJS Lucide - MoveDiagonal2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MoveDiagonal2 = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19 13v6h-6" }),
    path({ "d": "M5 11V5h6" }),
    path({ "d": "m5 5 14 14" }),
  );
};
