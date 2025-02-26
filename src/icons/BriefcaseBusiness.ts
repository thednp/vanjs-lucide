// VanJS Lucide - BriefcaseBusiness
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BriefcaseBusiness = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 12h.01" }),
    path({ "d": "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }),
    path({ "d": "M22 13a18.15 18.15 0 0 1-20 0" }),
    rect({ width: "20", height: "14", "x": "2", "y": "6", rx: "2" }),
  );
};
