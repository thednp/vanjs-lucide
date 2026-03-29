// VanJS Lucide - RotateCcwKey
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const RotateCcwKey = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 7v6" }),
    path({ "d": "M12 9h2" }),
    path({ "d": "M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" }),
    path({ "d": "M3 3v5h5" }),
    circle({
      cx: "12",
      cy: "15",
      "r": "2",
    }),
  );
};
