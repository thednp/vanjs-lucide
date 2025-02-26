// VanJS Lucide - WindArrowDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const WindArrowDown = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2v8" }),
    path({ "d": "M12.8 21.6A2 2 0 1 0 14 18H2" }),
    path({ "d": "M17.5 10a2.5 2.5 0 1 1 2 4H2" }),
    path({ "d": "m6 6 4 4 4-4" }),
  );
};
