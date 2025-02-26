// VanJS Lucide - Sunset
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Sunset = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 10V2" }),
    path({ "d": "m4.93 10.93 1.41 1.41" }),
    path({ "d": "M2 18h2" }),
    path({ "d": "M20 18h2" }),
    path({ "d": "m19.07 10.93-1.41 1.41" }),
    path({ "d": "M22 22H2" }),
    path({ "d": "m16 6-4 4-4-4" }),
    path({ "d": "M16 18a4 4 0 0 0-8 0" }),
  );
};
