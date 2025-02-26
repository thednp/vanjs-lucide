// VanJS Lucide - Presentation
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Presentation = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 3h20" }),
    path({ "d": "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" }),
    path({ "d": "m7 21 5-5 5 5" }),
  );
};
