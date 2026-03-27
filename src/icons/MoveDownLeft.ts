// VanJS Lucide - MoveDownLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const MoveDownLeft = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 19H5V13" }),
    path({ "d": "M19 5L5 19" }),
  );
};
