// VanJS Lucide - Heading3
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Heading3 = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 12h8" }),
    path({ "d": "M4 18V6" }),
    path({ "d": "M12 18V6" }),
    path({ "d": "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" }),
    path({ "d": "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" }),
  );
};
