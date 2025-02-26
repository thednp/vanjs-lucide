// VanJS Lucide - Heading
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Heading = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 12h12" }),
    path({ "d": "M6 20V4" }),
    path({ "d": "M18 20V4" }),
  );
};
