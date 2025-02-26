// VanJS Lucide - IceCreamBowl
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const IceCreamBowl = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",
    }),
    path({ "d": "M12.14 11a3.5 3.5 0 1 1 6.71 0" }),
    path({ "d": "M15.5 6.5a3.5 3.5 0 1 0-7 0" }),
  );
};
