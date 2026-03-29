// VanJS Lucide - ListX
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ListX = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M16 5H3" }),
    path({ "d": "M11 12H3" }),
    path({ "d": "M16 19H3" }),
    path({ "d": "m15.5 9.5 5 5" }),
    path({ "d": "m20.5 9.5-5 5" }),
  );
};
