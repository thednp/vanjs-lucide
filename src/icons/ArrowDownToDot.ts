// VanJS Lucide - ArrowDownToDot
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowDownToDot = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v14" }),
    path({ "d": "m19 9-7 7-7-7" }),
    circle({ cx: "12", cy: "21", "r": "1" }),
  );
};
