// VanJS Lucide - ClockAlert
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ClockAlert = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 6v6l4 2" }),
    path({ "d": "M16 21.16a10 10 0 1 1 5-13.516" }),
    path({ "d": "M20 11.5v6" }),
    path({ "d": "M20 21.5h.01" }),
  );
};
