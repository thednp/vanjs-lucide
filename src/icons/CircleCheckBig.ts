// VanJS Lucide - CircleCheckBig
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleCheckBig = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21.801 10A10 10 0 1 1 17 3.335" }),
    path({ "d": "m9 11 3 3L22 4" }),
  );
};
