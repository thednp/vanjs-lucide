// VanJS Lucide - TableColumnsSplit
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TableColumnsSplit = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 14v2" }),
    path({ "d": "M14 20v2" }),
    path({ "d": "M14 2v2" }),
    path({ "d": "M14 8v2" }),
    path({ "d": "M2 15h8" }),
    path({ "d": "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" }),
    path({ "d": "M2 9h8" }),
    path({ "d": "M22 15h-4" }),
    path({ "d": "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }),
    path({ "d": "M22 9h-4" }),
    path({ "d": "M5 3v18" }),
  );
};
