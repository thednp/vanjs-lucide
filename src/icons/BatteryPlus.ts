// VanJS Lucide - BatteryPlus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BatteryPlus = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 9v6" }),
    path({ "d": "M13.5 7H16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5" }),
    path({ "d": "M22 11v2" }),
    path({ "d": "M6.5 17H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5" }),
    path({ "d": "M7 12h6" }),
  );
};
