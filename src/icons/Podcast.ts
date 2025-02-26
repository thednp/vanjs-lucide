// VanJS Lucide - Podcast
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Podcast = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16.85 18.58a9 9 0 1 0-9.7 0" }),
    path({ "d": "M8 14a5 5 0 1 1 8 0" }),
    circle({ cx: "12", cy: "11", "r": "1" }),
    path({ "d": "M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" }),
  );
};
