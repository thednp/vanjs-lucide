// VanJS Lucide - ReplyAll
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ReplyAll = (props: Partial<SVGProps> = {}) => {
  const { polyline, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "7 17 2 12 7 7" }),
    polyline({ points: "12 17 7 12 12 7" }),
    path({ "d": "M22 18v-2a4 4 0 0 0-4-4H7" }),
  );
};
