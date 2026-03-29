// VanJS Lucide - Tv
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Tv = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m17 2-5 5-5-5" }),
    rect({
      width: "20",
      height: "15",
      "x": "2",
      "y": "7",
      rx: "2",
    }),
  );
};
