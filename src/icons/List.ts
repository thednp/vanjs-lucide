// VanJS Lucide - List
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const List = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M3 5h.01" }),
    path({ "d": "M3 12h.01" }),
    path({ "d": "M3 19h.01" }),
    path({ "d": "M8 5h13" }),
    path({ "d": "M8 12h13" }),
    path({ "d": "M8 19h13" }),
  );
};
