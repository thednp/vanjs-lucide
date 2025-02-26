// VanJS Lucide - TestTubes
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TestTubes = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" }),
    path({ "d": "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" }),
    path({ "d": "M3 2h7" }),
    path({ "d": "M14 2h7" }),
    path({ "d": "M9 16H4" }),
    path({ "d": "M20 16h-5" }),
  );
};
