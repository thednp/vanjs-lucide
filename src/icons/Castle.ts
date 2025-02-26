// VanJS Lucide - Castle
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Castle = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" }),
    path({ "d": "M18 11V4H6v7" }),
    path({ "d": "M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4" }),
    path({ "d": "M22 11V9" }),
    path({ "d": "M2 11V9" }),
    path({ "d": "M6 4V2" }),
    path({ "d": "M18 4V2" }),
    path({ "d": "M10 4V2" }),
    path({ "d": "M14 4V2" }),
  );
};
