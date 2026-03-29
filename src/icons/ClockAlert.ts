// VanJS Lucide - ClockAlert
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ClockAlert = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 6v6l4 2" }),
    path({ "d": "M20 12v5" }),
    path({ "d": "M20 21h.01" }),
    path({ "d": "M21.25 8.2A10 10 0 1 0 16 21.16" }),
  );
};
