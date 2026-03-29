// VanJS Lucide - Cloudy
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Cloudy = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" }),
    path({ "d": "M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" }),
  );
};
