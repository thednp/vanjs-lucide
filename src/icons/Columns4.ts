// VanJS Lucide - Columns4
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Columns4 = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M7.5 3v18" }),
    path({ "d": "M12 3v18" }),
    path({ "d": "M16.5 3v18" }),
  );
};
