// VanJS Lucide - LoaderPinwheel
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const LoaderPinwheel = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" }),
    path({ "d": "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" }),
    path({ "d": "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" }),
    circle({ cx: "12", cy: "12", "r": "10" }),
  );
};
