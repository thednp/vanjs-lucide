// VanJS Lucide - AlignHorizontalJustifyCenter
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignHorizontalJustifyCenter = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "14", "x": "2", "y": "5", rx: "2" }),
    rect({ width: "6", height: "10", "x": "16", "y": "7", rx: "2" }),
    path({ "d": "M12 2v20" }),
  );
};
