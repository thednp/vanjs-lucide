// VanJS Lucide - BotOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BotOff = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13.67 8H18a2 2 0 0 1 2 2v4.33" }),
    path({ "d": "M2 14h2" }),
    path({ "d": "M20 14h2" }),
    path({ "d": "M22 22 2 2" }),
    path({
      "d": "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586",
    }),
    path({ "d": "M9 13v2" }),
    path({ "d": "M9.67 4H12v2.33" }),
  );
};
