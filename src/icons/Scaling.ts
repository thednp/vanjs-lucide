// VanJS Lucide - Scaling
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Scaling = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
    path({ "d": "M14 15H9v-5" }),
    path({ "d": "M16 3h5v5" }),
    path({ "d": "M21 3 9 15" }),
  );
};
