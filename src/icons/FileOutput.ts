// VanJS Lucide - FileOutput
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FileOutput = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2" }),
    path({ "d": "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6" }),
    path({ "d": "m5 11-3 3" }),
    path({ "d": "m5 17-3-3h10" }),
  );
};
