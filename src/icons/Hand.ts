// VanJS Lucide - Hand
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Hand = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }),
    path({ "d": "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }),
    path({ "d": "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" }),
    path({
      "d":
        "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",
    }),
  );
};
