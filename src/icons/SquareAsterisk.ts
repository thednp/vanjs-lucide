// VanJS Lucide - SquareAsterisk
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareAsterisk = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M12 8v8" }),
    path({ "d": "m8.5 14 7-4" }),
    path({ "d": "m8.5 10 7 4" }),
  );
};
