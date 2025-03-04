// VanJS Lucide - GitCompareArrows
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GitCompareArrows = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "5", cy: "6", "r": "3" }),
    path({ "d": "M12 6h5a2 2 0 0 1 2 2v7" }),
    path({ "d": "m15 9-3-3 3-3" }),
    circle({ cx: "19", cy: "18", "r": "3" }),
    path({ "d": "M12 18H7a2 2 0 0 1-2-2V9" }),
    path({ "d": "m9 15 3 3-3 3" }),
  );
};
