// VanJS Lucide - Crop
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Crop = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 2v14a2 2 0 0 0 2 2h14" }),
    path({ "d": "M18 22V8a2 2 0 0 0-2-2H2" }),
  );
};
