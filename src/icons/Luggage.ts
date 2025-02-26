// VanJS Lucide - Luggage
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Luggage = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",
    }),
    path({ "d": "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" }),
    path({ "d": "M10 20h4" }),
    circle({ cx: "16", cy: "20", "r": "2" }),
    circle({ cx: "8", cy: "20", "r": "2" }),
  );
};
