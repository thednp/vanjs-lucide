// VanJS Lucide - GitGraph
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GitGraph = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "5", cy: "6", "r": "3" }),
    path({ "d": "M5 9v6" }),
    circle({ cx: "5", cy: "18", "r": "3" }),
    path({ "d": "M12 3v18" }),
    circle({ cx: "19", cy: "6", "r": "3" }),
    path({ "d": "M16 15.7A9 9 0 0 0 19 9" }),
  );
};
