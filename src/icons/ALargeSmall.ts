// VanJS Lucide - ALargeSmall
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ALargeSmall = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16" }),
    path({ "d": "M15.697 14h5.606" }),
    path({ "d": "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }),
    path({ "d": "M3.304 13h6.392" }),
  );
};
