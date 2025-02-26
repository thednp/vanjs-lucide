// VanJS Lucide - Mails
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Mails = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "13", "x": "6", "y": "4", rx: "2" }),
    path({ "d": "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" }),
    path({ "d": "M2 8v11c0 1.1.9 2 2 2h14" }),
  );
};
