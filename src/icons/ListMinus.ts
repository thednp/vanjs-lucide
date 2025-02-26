// VanJS Lucide - ListMinus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ListMinus = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 12H3" }),
    path({ "d": "M16 6H3" }),
    path({ "d": "M16 18H3" }),
    path({ "d": "M21 12h-6" }),
  );
};
