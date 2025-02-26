// VanJS Lucide - Tags
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Tags = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" }),
    path({
      "d":
        "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",
    }),
    circle({ cx: "6.5", cy: "9.5", "r": ".5", fill: "currentColor" }),
  );
};
