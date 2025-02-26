// VanJS Lucide - Tent
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Tent = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3.5 21 14 3" }),
    path({ "d": "M20.5 21 10 3" }),
    path({ "d": "M15.5 21 12 15l-3.5 6" }),
    path({ "d": "M2 21h20" }),
  );
};
