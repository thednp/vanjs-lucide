// VanJS Lucide - Ruler
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Ruler = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",
    }),
    path({ "d": "m14.5 12.5 2-2" }),
    path({ "d": "m11.5 9.5 2-2" }),
    path({ "d": "m8.5 6.5 2-2" }),
    path({ "d": "m17.5 15.5 2-2" }),
  );
};
