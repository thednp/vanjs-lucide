// VanJS Lucide - Menu
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Menu = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M4 5h16" }),
    path({ "d": "M4 12h16" }),
    path({ "d": "M4 19h16" }),
  );
};
