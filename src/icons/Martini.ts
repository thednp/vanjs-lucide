// VanJS Lucide - Martini
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Martini = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 22h8" }),
    path({ "d": "M12 11v11" }),
    path({ "d": "m19 3-7 8-7-8Z" }),
  );
};
