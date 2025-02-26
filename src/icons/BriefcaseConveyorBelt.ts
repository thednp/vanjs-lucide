// VanJS Lucide - BriefcaseConveyorBelt
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BriefcaseConveyorBelt = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 20v2" }),
    path({ "d": "M14 20v2" }),
    path({ "d": "M18 20v2" }),
    path({ "d": "M21 20H3" }),
    path({ "d": "M6 20v2" }),
    path({ "d": "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" }),
    rect({ "x": "4", "y": "6", width: "16", height: "10", rx: "2" }),
  );
};
