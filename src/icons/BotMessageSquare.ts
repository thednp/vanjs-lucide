// VanJS Lucide - BotMessageSquare
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const BotMessageSquare = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 6V2H8" }),
    path({ "d": "M15 11v2" }),
    path({ "d": "M2 12h2" }),
    path({ "d": "M20 12h2" }),
    path({
      "d":
        "M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z",
    }),
    path({ "d": "M9 11v2" }),
  );
};
