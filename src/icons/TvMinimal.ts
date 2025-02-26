// VanJS Lucide - TvMinimal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TvMinimal = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 21h10" }),
    rect({ width: "20", height: "14", "x": "2", "y": "3", rx: "2" }),
  );
};
