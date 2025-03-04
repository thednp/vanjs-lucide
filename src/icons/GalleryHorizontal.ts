// VanJS Lucide - GalleryHorizontal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GalleryHorizontal = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 3v18" }),
    rect({ width: "12", height: "18", "x": "6", "y": "3", rx: "2" }),
    path({ "d": "M22 3v18" }),
  );
};
