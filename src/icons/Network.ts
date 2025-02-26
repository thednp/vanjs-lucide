// VanJS Lucide - Network
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Network = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "16", "y": "16", width: "6", height: "6", rx: "1" }),
    rect({ "x": "2", "y": "16", width: "6", height: "6", rx: "1" }),
    rect({ "x": "9", "y": "2", width: "6", height: "6", rx: "1" }),
    path({ "d": "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" }),
    path({ "d": "M12 12V8" }),
  );
};
