// VanJS Lucide - BookOpenText
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BookOpenText = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 7v14" }),
    path({ "d": "M16 12h2" }),
    path({ "d": "M16 8h2" }),
    path({
      "d":
        "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
    }),
    path({ "d": "M6 12h2" }),
    path({ "d": "M6 8h2" }),
  );
};
