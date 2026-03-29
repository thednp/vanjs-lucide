// VanJS Lucide - MoveDownRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const MoveDownRight = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M19 13V19H13" }),
    path({ "d": "M5 5L19 19" }),
  );
};
