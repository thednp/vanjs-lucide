// VanJS Lucide - Files
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Files = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20 7h-3a2 2 0 0 1-2-2V2" }),
    path({
      "d": "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",
    }),
    path({ "d": "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" }),
  );
};
