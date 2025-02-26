// VanJS Lucide - FoldHorizontal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FoldHorizontal = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 12h6" }),
    path({ "d": "M22 12h-6" }),
    path({ "d": "M12 2v2" }),
    path({ "d": "M12 8v2" }),
    path({ "d": "M12 14v2" }),
    path({ "d": "M12 20v2" }),
    path({ "d": "m19 9-3 3 3 3" }),
    path({ "d": "m5 15 3-3-3-3" }),
  );
};
