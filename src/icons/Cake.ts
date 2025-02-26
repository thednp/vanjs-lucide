// VanJS Lucide - Cake
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Cake = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" }),
    path({ "d": "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" }),
    path({ "d": "M2 21h20" }),
    path({ "d": "M7 8v3" }),
    path({ "d": "M12 8v3" }),
    path({ "d": "M17 8v3" }),
    path({ "d": "M7 4h.01" }),
    path({ "d": "M12 4h.01" }),
    path({ "d": "M17 4h.01" }),
  );
};
