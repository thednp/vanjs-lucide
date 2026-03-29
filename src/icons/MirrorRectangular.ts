// VanJS Lucide - MirrorRectangular
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const MirrorRectangular = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M11 6 8 9" }),
    path({ "d": "m16 7-8 8" }),
    rect({
      "x": "4",
      "y": "2",
      width: "16",
      height: "20",
      rx: "2",
    }),
  );
};
