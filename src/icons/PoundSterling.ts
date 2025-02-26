// VanJS Lucide - PoundSterling
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const PoundSterling = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 7c0-5.333-8-5.333-8 0" }),
    path({ "d": "M10 7v14" }),
    path({ "d": "M6 21h12" }),
    path({ "d": "M6 13h10" }),
  );
};
