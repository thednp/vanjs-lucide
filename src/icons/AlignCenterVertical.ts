// VanJS Lucide - AlignCenterVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignCenterVertical = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v20" }),
    path({ "d": "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" }),
    path({ "d": "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" }),
    path({ "d": "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" }),
    path({ "d": "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" }),
  );
};
