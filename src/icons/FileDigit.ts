// VanJS Lucide - FileDigit
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FileDigit = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    rect({ width: "4", height: "6", "x": "2", "y": "12", rx: "2" }),
    path({ "d": "M10 12h2v6" }),
    path({ "d": "M10 18h4" }),
  );
};
