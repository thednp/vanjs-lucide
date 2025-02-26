// VanJS Lucide - LetterText
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const LetterText = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 12h6" }),
    path({ "d": "M15 6h6" }),
    path({ "d": "m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13" }),
    path({ "d": "M3 18h18" }),
    path({ "d": "M4 11h6" }),
  );
};
