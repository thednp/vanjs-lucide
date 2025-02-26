// VanJS Lucide - Lectern
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Lectern = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3",
    }),
    path({ "d": "M18 6V3a1 1 0 0 0-1-1h-3" }),
    rect({ width: "8", height: "12", "x": "8", "y": "10", rx: "1" }),
  );
};
