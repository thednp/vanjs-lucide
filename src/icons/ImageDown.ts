// VanJS Lucide - ImageDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ImageDown = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",
    }),
    path({ "d": "m14 19 3 3v-5.5" }),
    path({ "d": "m17 22 3-3" }),
    circle({ cx: "9", cy: "9", "r": "2" }),
  );
};
