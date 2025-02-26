// VanJS Lucide - TvMinimalPlay
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TvMinimalPlay = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",
    }),
    path({ "d": "M7 21h10" }),
    rect({ width: "20", height: "14", "x": "2", "y": "3", rx: "2" }),
  );
};
