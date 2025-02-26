// VanJS Lucide - Merge
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Merge = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m8 6 4-4 4 4" }),
    path({ "d": "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" }),
    path({ "d": "m20 22-5-5" }),
  );
};
