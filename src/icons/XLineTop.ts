// VanJS Lucide - XLineTop
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const XLineTop = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M18 4H6" }),
    path({ "d": "M18 8 6 20" }),
    path({ "d": "m6 8 12 12" }),
  );
};
