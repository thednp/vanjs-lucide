// VanJS Lucide - RollerCoaster
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const RollerCoaster = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 19V5" }),
    path({ "d": "M10 19V6.8" }),
    path({ "d": "M14 19v-7.8" }),
    path({ "d": "M18 5v4" }),
    path({ "d": "M18 19v-6" }),
    path({ "d": "M22 19V9" }),
    path({
      "d": "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",
    }),
  );
};
