// VanJS Lucide - ListMinus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ListMinus = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M16 5H3" }),
    path({ "d": "M11 12H3" }),
    path({ "d": "M16 19H3" }),
    path({ "d": "M21 12h-6" }),
  );
};
