// VanJS Lucide - Grid2x2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Grid2x2 = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3v18" }),
    path({ "d": "M3 12h18" }),
    rect({ "x": "3", "y": "3", width: "18", height: "18", rx: "2" }),
  );
};
