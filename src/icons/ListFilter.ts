// VanJS Lucide - ListFilter
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ListFilter = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M2 5h20" }),
    path({ "d": "M6 12h12" }),
    path({ "d": "M9 19h6" }),
  );
};
