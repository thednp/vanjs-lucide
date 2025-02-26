// VanJS Lucide - RemoveFormatting
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const RemoveFormatting = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 7V4h16v3" }),
    path({ "d": "M5 20h6" }),
    path({ "d": "M13 4 8 20" }),
    path({ "d": "m15 15 5 5" }),
    path({ "d": "m20 15-5 5" }),
  );
};
