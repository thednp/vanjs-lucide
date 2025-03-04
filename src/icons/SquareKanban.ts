// VanJS Lucide - SquareKanban
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareKanban = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M8 7v7" }),
    path({ "d": "M12 7v4" }),
    path({ "d": "M16 7v9" }),
  );
};
