// VanJS Lucide - FileUser
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FileUser = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M15 18a3 3 0 1 0-6 0" }),
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }),
    circle({ cx: "12", cy: "13", "r": "2" }),
  );
};
