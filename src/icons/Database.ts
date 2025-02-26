// VanJS Lucide - Database
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Database = (props: Partial<SVGProps> = {}) => {
  const { ellipse, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    ellipse({ cx: "12", cy: "5", rx: "9", ry: "3" }),
    path({ "d": "M3 5V19A9 3 0 0 0 21 19V5" }),
    path({ "d": "M3 12A9 3 0 0 0 21 12" }),
  );
};
