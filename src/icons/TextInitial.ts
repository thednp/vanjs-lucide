// VanJS Lucide - TextInitial
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const TextInitial = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M15 5h6" }),
    path({ "d": "M15 12h6" }),
    path({ "d": "M3 19h18" }),
    path({ "d": "m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12" }),
    path({ "d": "M3.92 10h6.16" }),
  );
};
