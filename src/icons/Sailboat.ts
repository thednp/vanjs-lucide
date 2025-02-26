// VanJS Lucide - Sailboat
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Sailboat = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" }),
    path({ "d": "M21 14 10 2 3 14h18Z" }),
    path({ "d": "M10 2v16" }),
  );
};
