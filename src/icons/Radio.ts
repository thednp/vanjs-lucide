// VanJS Lucide - Radio
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Radio = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M16.247 7.761a6 6 0 0 1 0 8.478" }),
    path({ "d": "M19.075 4.933a10 10 0 0 1 0 14.134" }),
    path({ "d": "M4.925 19.067a10 10 0 0 1 0-14.134" }),
    path({ "d": "M7.753 16.239a6 6 0 0 1 0-8.478" }),
    circle({
      cx: "12",
      cy: "12",
      "r": "2",
    }),
  );
};
