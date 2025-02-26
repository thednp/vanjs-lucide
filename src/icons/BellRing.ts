// VanJS Lucide - BellRing
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BellRing = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.268 21a2 2 0 0 0 3.464 0" }),
    path({ "d": "M22 8c0-2.3-.8-4.3-2-6" }),
    path({
      "d":
        "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
    }),
    path({ "d": "M4 2C2.8 3.7 2 5.7 2 8" }),
  );
};
