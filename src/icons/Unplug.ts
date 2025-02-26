// VanJS Lucide - Unplug
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Unplug = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m19 5 3-3" }),
    path({ "d": "m2 22 3-3" }),
    path({
      "d":
        "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",
    }),
    path({ "d": "M7.5 13.5 10 11" }),
    path({ "d": "M10.5 16.5 13 14" }),
    path({
      "d":
        "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",
    }),
  );
};
