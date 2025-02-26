// VanJS Lucide - TramFront
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TramFront = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "16", "x": "4", "y": "3", rx: "2" }),
    path({ "d": "M4 11h16" }),
    path({ "d": "M12 3v8" }),
    path({ "d": "m8 19-2 3" }),
    path({ "d": "m18 22-2-3" }),
    path({ "d": "M8 15h.01" }),
    path({ "d": "M16 15h.01" }),
  );
};
