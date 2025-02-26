// VanJS Lucide - MoveVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MoveVertical = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v20" }),
    path({ "d": "m8 18 4 4 4-4" }),
    path({ "d": "m8 6 4-4 4 4" }),
  );
};
