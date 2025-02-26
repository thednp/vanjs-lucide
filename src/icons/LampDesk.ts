// VanJS Lucide - LampDesk
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const LampDesk = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m14 5-3 3 2 7 8-8-7-2Z" }),
    path({ "d": "m14 5-3 3-3-3 3-3 3 3Z" }),
    path({ "d": "M9.5 6.5 4 12l3 6" }),
    path({ "d": "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z" }),
  );
};
