// VanJS Lucide - BookCopy
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BookCopy = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 16V4a2 2 0 0 1 2-2h11" }),
    path({
      "d":
        "M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12",
    }),
    path({ "d": "M5 14H4a2 2 0 1 0 0 4h1" }),
  );
};
