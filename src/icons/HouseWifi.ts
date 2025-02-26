// VanJS Lucide - HouseWifi
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const HouseWifi = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9.5 13.866a4 4 0 0 1 5 .01" }),
    path({ "d": "M12 17h.01" }),
    path({
      "d":
        "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    }),
    path({ "d": "M7 10.754a8 8 0 0 1 10 0" }),
  );
};
