// VanJS Lucide - Antenna
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Antenna = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 12 7 2" }),
    path({ "d": "m7 12 5-10" }),
    path({ "d": "m12 12 5-10" }),
    path({ "d": "m17 12 5-10" }),
    path({ "d": "M4.5 7h15" }),
    path({ "d": "M12 16v6" }),
  );
};
