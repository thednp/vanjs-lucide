// VanJS Lucide - Wand
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Wand = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 4V2" }),
    path({ "d": "M15 16v-2" }),
    path({ "d": "M8 9h2" }),
    path({ "d": "M20 9h2" }),
    path({ "d": "M17.8 11.8 19 13" }),
    path({ "d": "M15 9h.01" }),
    path({ "d": "M17.8 6.2 19 5" }),
    path({ "d": "m3 21 9-9" }),
    path({ "d": "M12.2 6.2 11 5" }),
  );
};
