// VanJS Lucide - CableCar
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CableCar = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 3h.01" }),
    path({ "d": "M14 2h.01" }),
    path({ "d": "m2 9 20-5" }),
    path({ "d": "M12 12V6.5" }),
    rect({ width: "16", height: "10", "x": "4", "y": "12", rx: "3" }),
    path({ "d": "M9 12v5" }),
    path({ "d": "M15 12v5" }),
    path({ "d": "M4 17h16" }),
  );
};
