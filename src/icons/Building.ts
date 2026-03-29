// VanJS Lucide - Building
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Building = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 10h.01" }),
    path({ "d": "M12 14h.01" }),
    path({ "d": "M12 6h.01" }),
    path({ "d": "M16 10h.01" }),
    path({ "d": "M16 14h.01" }),
    path({ "d": "M16 6h.01" }),
    path({ "d": "M8 10h.01" }),
    path({ "d": "M8 14h.01" }),
    path({ "d": "M8 6h.01" }),
    path({ "d": "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" }),
    rect({
      "x": "4",
      "y": "2",
      width: "16",
      height: "20",
      rx: "2",
    }),
  );
};
