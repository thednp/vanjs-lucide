// VanJS Lucide - Split
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Split = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 3h5v5" }),
    path({ "d": "M8 3H3v5" }),
    path({ "d": "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" }),
    path({ "d": "m15 9 6-6" }),
  );
};
