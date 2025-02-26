// VanJS Lucide - UnfoldHorizontal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const UnfoldHorizontal = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 12h6" }),
    path({ "d": "M8 12H2" }),
    path({ "d": "M12 2v2" }),
    path({ "d": "M12 8v2" }),
    path({ "d": "M12 14v2" }),
    path({ "d": "M12 20v2" }),
    path({ "d": "m19 15 3-3-3-3" }),
    path({ "d": "m5 9-3 3 3 3" }),
  );
};
