// VanJS Lucide - Framer
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Framer = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" }),
  );
};
