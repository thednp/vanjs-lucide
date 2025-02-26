// VanJS Lucide - BookmarkX
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BookmarkX = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }),
    path({ "d": "m14.5 7.5-5 5" }),
    path({ "d": "m9.5 7.5 5 5" }),
  );
};
