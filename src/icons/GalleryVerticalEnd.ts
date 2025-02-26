// VanJS Lucide - GalleryVerticalEnd
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GalleryVerticalEnd = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 2h10" }),
    path({ "d": "M5 6h14" }),
    rect({ width: "18", height: "12", "x": "3", "y": "10", rx: "2" }),
  );
};
