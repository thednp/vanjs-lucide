// VanJS Lucide - Text
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Text = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 6.1H3" }),
    path({ "d": "M21 12.1H3" }),
    path({ "d": "M15.1 18H3" }),
  );
};
