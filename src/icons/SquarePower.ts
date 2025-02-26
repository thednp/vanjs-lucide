// VanJS Lucide - SquarePower
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquarePower = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 7v4" }),
    path({ "d": "M7.998 9.003a5 5 0 1 0 8-.005" }),
    rect({ "x": "3", "y": "3", width: "18", height: "18", rx: "2" }),
  );
};
