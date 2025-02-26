// VanJS Lucide - Bot
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Bot = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 8V4H8" }),
    rect({ width: "16", height: "12", "x": "4", "y": "8", rx: "2" }),
    path({ "d": "M2 14h2" }),
    path({ "d": "M20 14h2" }),
    path({ "d": "M15 13v2" }),
    path({ "d": "M9 13v2" }),
  );
};
