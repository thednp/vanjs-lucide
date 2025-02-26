// VanJS Lucide - Package
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Package = (props: Partial<SVGProps> = {}) => {
  const { path, polyline } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
    }),
    path({ "d": "M12 22V12" }),
    polyline({ points: "3.29 7 12 12 20.71 7" }),
    path({ "d": "m7.5 4.27 9 5.15" }),
  );
};
