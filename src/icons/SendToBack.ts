// VanJS Lucide - SendToBack
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SendToBack = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "14", "y": "14", width: "8", height: "8", rx: "2" }),
    rect({ "x": "2", "y": "2", width: "8", height: "8", rx: "2" }),
    path({ "d": "M7 14v1a2 2 0 0 0 2 2h1" }),
    path({ "d": "M14 7h1a2 2 0 0 1 2 2v1" }),
  );
};
