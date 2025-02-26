// VanJS Lucide - Flower2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Flower2 = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
    }),
    circle({ cx: "12", cy: "8", "r": "2" }),
    path({ "d": "M12 10v12" }),
    path({ "d": "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" }),
    path({ "d": "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" }),
  );
};
