// VanJS Lucide - JapaneseYen
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const JapaneseYen = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 9.5V21m0-11.5L6 3m6 6.5L18 3" }),
    path({ "d": "M6 15h12" }),
    path({ "d": "M6 11h12" }),
  );
};
