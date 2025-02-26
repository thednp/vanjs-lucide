// VanJS Lucide - Megaphone
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Megaphone = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 11 18-5v12L3 14v-3z" }),
    path({ "d": "M11.6 16.8a3 3 0 1 1-5.8-1.6" }),
  );
};
