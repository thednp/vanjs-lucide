// VanJS Lucide - FileDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FileDown = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M12 18v-6" }),
    path({ "d": "m9 15 3 3 3-3" }),
  );
};
