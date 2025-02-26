// VanJS Lucide - Transgender
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Transgender = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 16v6" }),
    path({ "d": "M14 20h-4" }),
    path({ "d": "M18 2h4v4" }),
    path({ "d": "m2 2 7.17 7.17" }),
    path({ "d": "M2 5.355V2h3.357" }),
    path({ "d": "m22 2-7.17 7.17" }),
    path({ "d": "M8 5 5 8" }),
    circle({ cx: "12", cy: "12", "r": "4" }),
  );
};
