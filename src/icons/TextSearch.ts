// VanJS Lucide - TextSearch
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TextSearch = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 6H3" }),
    path({ "d": "M10 12H3" }),
    path({ "d": "M10 18H3" }),
    circle({ cx: "17", cy: "15", "r": "3" }),
    path({ "d": "m21 19-1.9-1.9" }),
  );
};
