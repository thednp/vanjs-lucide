// VanJS Lucide - Bandage
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Bandage = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 10.01h.01" }),
    path({ "d": "M10 14.01h.01" }),
    path({ "d": "M14 10.01h.01" }),
    path({ "d": "M14 14.01h.01" }),
    path({ "d": "M18 6v11.5" }),
    path({ "d": "M6 6v12" }),
    rect({ "x": "2", "y": "6", width: "20", height: "12", rx: "2" }),
  );
};
