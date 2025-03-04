// VanJS Lucide - BatteryWarning
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BatteryWarning = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 17h.01" }),
    path({ "d": "M10 7v6" }),
    path({ "d": "M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M22 11v2" }),
    path({ "d": "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }),
  );
};
