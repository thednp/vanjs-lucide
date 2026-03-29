// VanJS Lucide - ListFilterPlus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ListFilterPlus = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 5H2" }),
    path({ "d": "M6 12h12" }),
    path({ "d": "M9 19h6" }),
    path({ "d": "M16 5h6" }),
    path({ "d": "M19 8V2" }),
  );
};
