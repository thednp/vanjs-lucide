// VanJS Lucide - HardDriveUpload
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const HardDriveUpload = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m16 6-4-4-4 4" }),
    path({ "d": "M12 2v8" }),
    rect({ width: "20", height: "8", "x": "2", "y": "14", rx: "2" }),
    path({ "d": "M6 18h.01" }),
    path({ "d": "M10 18h.01" }),
  );
};
