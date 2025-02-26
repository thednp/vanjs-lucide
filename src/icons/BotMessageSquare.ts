// VanJS Lucide - BotMessageSquare
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BotMessageSquare = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 6V2H8" }),
    path({
      "d": "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",
    }),
    path({ "d": "M2 12h2" }),
    path({ "d": "M9 11v2" }),
    path({ "d": "M15 11v2" }),
    path({ "d": "M20 12h2" }),
  );
};
