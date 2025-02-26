// VanJS Lucide - FileKey
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FileKey = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    circle({ cx: "10", cy: "16", "r": "2" }),
    path({ "d": "m16 10-4.5 4.5" }),
    path({ "d": "m15 11 1 1" }),
  );
};
