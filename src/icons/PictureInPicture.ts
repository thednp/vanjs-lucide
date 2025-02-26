// VanJS Lucide - PictureInPicture
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const PictureInPicture = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 10h6V4" }),
    path({ "d": "m2 4 6 6" }),
    path({ "d": "M21 10V7a2 2 0 0 0-2-2h-7" }),
    path({ "d": "M3 14v2a2 2 0 0 0 2 2h3" }),
    rect({ "x": "12", "y": "14", width: "10", height: "7", rx: "1" }),
  );
};
