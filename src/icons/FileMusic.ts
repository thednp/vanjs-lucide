// VanJS Lucide - FileMusic
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FileMusic = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4" }),
    path({ "d": "M8 18v-7.7L16 9v7" }),
    circle({ cx: "14", cy: "16", "r": "2" }),
    circle({ cx: "6", cy: "18", "r": "2" }),
  );
};
