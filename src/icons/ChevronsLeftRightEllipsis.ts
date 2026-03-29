// VanJS Lucide - ChevronsLeftRightEllipsis
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ChevronsLeftRightEllipsis = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 12h.01" }),
    path({ "d": "M16 12h.01" }),
    path({ "d": "m17 7 5 5-5 5" }),
    path({ "d": "m7 7-5 5 5 5" }),
    path({ "d": "M8 12h.01" }),
  );
};
