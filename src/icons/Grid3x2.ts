// VanJS Lucide - Grid3x2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Grid3x2 = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M15 3v18" }),
    path({ "d": "M3 12h18" }),
    path({ "d": "M9 3v18" }),
    rect({
      "x": "3",
      "y": "3",
      width: "18",
      height: "18",
      rx: "2",
    }),
  );
};
