// VanJS Lucide - SwissFranc
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const SwissFranc = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10 21V3h8" }),
    path({ "d": "M6 16h9" }),
    path({ "d": "M10 9.5h7" }),
  );
};
