// VanJS Lucide - ToyBrick
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ToyBrick = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "12", "x": "3", "y": "8", rx: "1" }),
    path({ "d": "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" }),
    path({ "d": "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" }),
  );
};
