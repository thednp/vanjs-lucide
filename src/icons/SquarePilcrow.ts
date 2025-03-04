// VanJS Lucide - SquarePilcrow
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquarePilcrow = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M12 12H9.5a2.5 2.5 0 0 1 0-5H17" }),
    path({ "d": "M12 7v10" }),
    path({ "d": "M16 7v10" }),
  );
};
