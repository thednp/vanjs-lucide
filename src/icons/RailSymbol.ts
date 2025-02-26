// VanJS Lucide - RailSymbol
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const RailSymbol = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 15h14" }),
    path({ "d": "M5 9h14" }),
    path({ "d": "m14 20-5-5 6-6-5-5" }),
  );
};
