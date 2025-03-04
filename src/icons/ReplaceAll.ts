// VanJS Lucide - ReplaceAll
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ReplaceAll = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }),
    path({ "d": "M14 4a2 2 0 0 1 2-2" }),
    path({ "d": "M16 10a2 2 0 0 1-2-2" }),
    path({ "d": "M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }),
    path({ "d": "M20 2a2 2 0 0 1 2 2" }),
    path({ "d": "M22 8a2 2 0 0 1-2 2" }),
    path({ "d": "m3 7 3 3 3-3" }),
    path({ "d": "M6 10V5a 3 3 0 0 1 3-3h1" }),
    rect({ "x": "2", "y": "14", width: "8", height: "8", rx: "2" }),
  );
};
