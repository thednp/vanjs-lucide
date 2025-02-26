// VanJS Lucide - MessageSquareMore
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MessageSquareMore = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
    }),
    path({ "d": "M8 10h.01" }),
    path({ "d": "M12 10h.01" }),
    path({ "d": "M16 10h.01" }),
  );
};
