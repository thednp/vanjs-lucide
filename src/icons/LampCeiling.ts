// VanJS Lucide - LampCeiling
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const LampCeiling = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v5" }),
    path({ "d": "M6 7h12l4 9H2l4-9Z" }),
    path({ "d": "M9.17 16a3 3 0 1 0 5.66 0" }),
  );
};
