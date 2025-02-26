// VanJS Lucide - LampWallDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const LampWallDown = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 13h6l3 7H8l3-7Z" }),
    path({ "d": "M14 13V8a2 2 0 0 0-2-2H8" }),
    path({ "d": "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z" }),
  );
};
