// VanJS Lucide - Rss
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Rss = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 11a9 9 0 0 1 9 9" }),
    path({ "d": "M4 4a16 16 0 0 1 16 16" }),
    circle({ cx: "5", cy: "19", "r": "1" }),
  );
};
