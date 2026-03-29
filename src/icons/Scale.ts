// VanJS Lucide - Scale
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Scale = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 3v18" }),
    path({ "d": "m19 8 3 8a5 5 0 0 1-6 0zV7" }),
    path({ "d": "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" }),
    path({ "d": "m5 8 3 8a5 5 0 0 1-6 0zV7" }),
    path({ "d": "M7 21h10" }),
  );
};
