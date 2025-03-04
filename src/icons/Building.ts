// VanJS Lucide - Building
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Building = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "20", "x": "4", "y": "2", rx: "2", ry: "2" }),
    path({ "d": "M9 22v-4h6v4" }),
    path({ "d": "M8 6h.01" }),
    path({ "d": "M16 6h.01" }),
    path({ "d": "M12 6h.01" }),
    path({ "d": "M12 10h.01" }),
    path({ "d": "M12 14h.01" }),
    path({ "d": "M16 10h.01" }),
    path({ "d": "M16 14h.01" }),
    path({ "d": "M8 10h.01" }),
    path({ "d": "M8 14h.01" }),
  );
};
