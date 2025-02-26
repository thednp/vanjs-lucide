// VanJS Lucide - RotateCwSquare
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const RotateCwSquare = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 5H6a2 2 0 0 0-2 2v3" }),
    path({ "d": "m9 8 3-3-3-3" }),
    path({ "d": "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }),
  );
};
