// VanJS Lucide - ListMusic
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ListMusic = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M16 5H3" }),
    path({ "d": "M11 12H3" }),
    path({ "d": "M11 19H3" }),
    path({ "d": "M21 16V5" }),
    circle({
      cx: "18",
      cy: "16",
      "r": "3",
    }),
  );
};
