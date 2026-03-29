// VanJS Lucide - Sword
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Sword = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m11 19-6-6" }),
    path({ "d": "m5 21-2-2" }),
    path({ "d": "m8 16-4 4" }),
    path({ "d": "M9.5 17.5 21 6V3h-3L6.5 14.5" }),
  );
};
