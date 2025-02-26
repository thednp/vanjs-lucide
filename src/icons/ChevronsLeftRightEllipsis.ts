// VanJS Lucide - ChevronsLeftRightEllipsis
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ChevronsLeftRightEllipsis = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m18 8 4 4-4 4" }),
    path({ "d": "m6 8-4 4 4 4" }),
    path({ "d": "M8 12h.01" }),
    path({ "d": "M12 12h.01" }),
    path({ "d": "M16 12h.01" }),
  );
};
