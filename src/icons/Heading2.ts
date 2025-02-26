// VanJS Lucide - Heading2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Heading2 = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 12h8" }),
    path({ "d": "M4 18V6" }),
    path({ "d": "M12 18V6" }),
    path({ "d": "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" }),
  );
};
