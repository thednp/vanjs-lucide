// VanJS Lucide - Mouse
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Mouse = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "5", "y": "2", width: "14", height: "20", rx: "7" }),
    path({ "d": "M12 6v4" }),
  );
};
