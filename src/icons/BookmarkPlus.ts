// VanJS Lucide - BookmarkPlus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BookmarkPlus = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }),
    line({ x1: "12", x2: "12", y1: "7", y2: "13" }),
    line({ x1: "15", x2: "9", y1: "10", y2: "10" }),
  );
};
