// VanJS Lucide - Beaker
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Beaker = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4.5 3h15" }),
    path({ "d": "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" }),
    path({ "d": "M6 14h12" }),
  );
};
