// VanJS Lucide - ListEnd
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ListEnd = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M16 5H3" }),
    path({ "d": "M16 12H3" }),
    path({ "d": "M9 19H3" }),
    path({ "d": "m16 16-3 3 3 3" }),
    path({ "d": "M21 5v12a2 2 0 0 1-2 2h-6" }),
  );
};
