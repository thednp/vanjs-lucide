// VanJS Lucide - MessageSquareQuote
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const MessageSquareQuote = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M14 14a2 2 0 0 0 2-2V8h-2" }),
    path({
      "d":
        "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
    }),
    path({ "d": "M8 14a2 2 0 0 0 2-2V8H8" }),
  );
};
