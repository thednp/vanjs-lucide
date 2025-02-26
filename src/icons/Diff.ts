// VanJS Lucide - Diff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Diff = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3v14" }),
    path({ "d": "M5 10h14" }),
    path({ "d": "M5 21h14" }),
  );
};
