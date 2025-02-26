// VanJS Lucide - AudioLines
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AudioLines = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 10v3" }),
    path({ "d": "M6 6v11" }),
    path({ "d": "M10 3v18" }),
    path({ "d": "M14 8v7" }),
    path({ "d": "M18 5v13" }),
    path({ "d": "M22 10v3" }),
  );
};
