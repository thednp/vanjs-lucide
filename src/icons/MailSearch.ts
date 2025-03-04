// VanJS Lucide - MailSearch
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MailSearch = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",
    }),
    path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }),
    path({ "d": "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }),
    circle({ cx: "18", cy: "18", "r": "3" }),
    path({ "d": "m22 22-1.5-1.5" }),
  );
};
