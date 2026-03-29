// VanJS Lucide - FlagOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const FlagOff = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M4 22V4" }),
    path({
      "d": "M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347",
    }),
  );
};
