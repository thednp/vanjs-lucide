// VanJS Lucide - View
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const View = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" }),
    path({ "d": "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" }),
    circle({ cx: "12", cy: "12", "r": "1" }),
    path({
      "d":
        "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0",
    }),
  );
};
