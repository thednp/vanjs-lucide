// VanJS Lucide - VolumeX
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const VolumeX = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
    }),
    line({ x1: "22", x2: "16", y1: "9", y2: "15" }),
    line({ x1: "16", x2: "22", y1: "9", y2: "15" }),
  );
};
