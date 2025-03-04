// VanJS Lucide - Pizza
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Pizza = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m12 14-1 1" }),
    path({ "d": "m13.75 18.25-1.25 1.42" }),
    path({ "d": "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" }),
    path({ "d": "M18.8 9.3a1 1 0 0 0 2.1 7.7" }),
    path({
      "d":
        "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z",
    }),
  );
};
