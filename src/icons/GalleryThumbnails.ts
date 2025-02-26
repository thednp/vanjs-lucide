// VanJS Lucide - GalleryThumbnails
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GalleryThumbnails = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "14", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M4 21h1" }),
    path({ "d": "M9 21h1" }),
    path({ "d": "M14 21h1" }),
    path({ "d": "M19 21h1" }),
  );
};
