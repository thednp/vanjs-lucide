// VanJS Lucide - TableCellsMerge
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TableCellsMerge = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 21v-6" }),
    path({ "d": "M12 9V3" }),
    path({ "d": "M3 15h18" }),
    path({ "d": "M3 9h18" }),
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
  );
};
