// VanJS Lucide - DiscAlbum
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const DiscAlbum = (props: Partial<SVGProps> = {}) => {
  const { rect, circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    circle({ cx: "12", cy: "12", "r": "5" }),
    path({ "d": "M12 12h.01" }),
  );
};
