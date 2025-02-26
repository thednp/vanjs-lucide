// VanJS Lucide - Film
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Film = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M7 3v18" }),
    path({ "d": "M3 7.5h4" }),
    path({ "d": "M3 12h18" }),
    path({ "d": "M3 16.5h4" }),
    path({ "d": "M17 3v18" }),
    path({ "d": "M17 7.5h4" }),
    path({ "d": "M17 16.5h4" }),
  );
};
