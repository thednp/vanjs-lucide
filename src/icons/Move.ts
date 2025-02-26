// VanJS Lucide - Move
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Move = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v20" }),
    path({ "d": "m15 19-3 3-3-3" }),
    path({ "d": "m19 9 3 3-3 3" }),
    path({ "d": "M2 12h20" }),
    path({ "d": "m5 9-3 3 3 3" }),
    path({ "d": "m9 5 3-3 3 3" }),
  );
};
