// VanJS Lucide - GalleryHorizontalEnd
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const GalleryHorizontalEnd = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 7v10" }),
    path({ "d": "M6 5v14" }),
    rect({ width: "12", height: "18", "x": "10", "y": "3", rx: "2" }),
  );
};
