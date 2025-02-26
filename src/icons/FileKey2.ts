// VanJS Lucide - FileKey2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FileKey2 = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    circle({ cx: "4", cy: "16", "r": "2" }),
    path({ "d": "m10 10-4.5 4.5" }),
    path({ "d": "m9 11 1 1" }),
  );
};
