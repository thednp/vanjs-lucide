// VanJS Lucide - SmartphoneCharging
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SmartphoneCharging = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "20", "x": "5", "y": "2", rx: "2", ry: "2" }),
    path({ "d": "M12.667 8 10 12h4l-2.667 4" }),
  );
};
