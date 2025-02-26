// VanJS Lucide - FileBadge2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FileBadge2 = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    circle({ cx: "12", cy: "10", "r": "3" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "m14 12.5 1 5.5-3-1-3 1 1-5.5" }),
  );
};
