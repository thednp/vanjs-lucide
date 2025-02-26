// VanJS Lucide - HardDriveDownload
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const HardDriveDownload = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v8" }),
    path({ "d": "m16 6-4 4-4-4" }),
    rect({ width: "20", height: "8", "x": "2", "y": "14", rx: "2" }),
    path({ "d": "M6 18h.01" }),
    path({ "d": "M10 18h.01" }),
  );
};
