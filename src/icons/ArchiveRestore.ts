// VanJS Lucide - ArchiveRestore
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArchiveRestore = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "5", "x": "2", "y": "3", rx: "1" }),
    path({ "d": "M4 8v11a2 2 0 0 0 2 2h2" }),
    path({ "d": "M20 8v11a2 2 0 0 1-2 2h-2" }),
    path({ "d": "m9 15 3-3 3 3" }),
    path({ "d": "M12 12v9" }),
  );
};
