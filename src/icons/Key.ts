// VanJS Lucide - Key
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Key = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
    }),
    path({ "d": "m21 2-9.6 9.6" }),
    circle({ cx: "7.5", cy: "15.5", "r": "5.5" }),
  );
};
