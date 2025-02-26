// VanJS Lucide - FoldVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FoldVertical = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 22v-6" }),
    path({ "d": "M12 8V2" }),
    path({ "d": "M4 12H2" }),
    path({ "d": "M10 12H8" }),
    path({ "d": "M16 12h-2" }),
    path({ "d": "M22 12h-2" }),
    path({ "d": "m15 19-3-3-3 3" }),
    path({ "d": "m15 5-3 3-3-3" }),
  );
};
