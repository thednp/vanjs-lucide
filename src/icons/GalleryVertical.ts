// VanJS Lucide - GalleryVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const GalleryVertical = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 2h18" }),
    rect({ width: "18", height: "12", "x": "3", "y": "6", rx: "2" }),
    path({ "d": "M3 22h18" }),
  );
};
