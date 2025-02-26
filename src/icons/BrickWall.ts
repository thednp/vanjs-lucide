// VanJS Lucide - BrickWall
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BrickWall = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M12 9v6" }),
    path({ "d": "M16 15v6" }),
    path({ "d": "M16 3v6" }),
    path({ "d": "M3 15h18" }),
    path({ "d": "M3 9h18" }),
    path({ "d": "M8 15v6" }),
    path({ "d": "M8 3v6" }),
  );
};
