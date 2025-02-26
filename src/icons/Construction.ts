// VanJS Lucide - Construction
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Construction = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "2", "y": "6", width: "20", height: "8", rx: "1" }),
    path({ "d": "M17 14v7" }),
    path({ "d": "M7 14v7" }),
    path({ "d": "M17 3v3" }),
    path({ "d": "M7 3v3" }),
    path({ "d": "M10 14 2.3 6.3" }),
    path({ "d": "m14 6 7.7 7.7" }),
    path({ "d": "m8 6 8 8" }),
  );
};
