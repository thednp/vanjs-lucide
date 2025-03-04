// VanJS Lucide - SquareDashedMousePointer
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SquareDashedMousePointer = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z",
    }),
    path({ "d": "M5 3a2 2 0 0 0-2 2" }),
    path({ "d": "M19 3a2 2 0 0 1 2 2" }),
    path({ "d": "M5 21a2 2 0 0 1-2-2" }),
    path({ "d": "M9 3h1" }),
    path({ "d": "M9 21h2" }),
    path({ "d": "M14 3h1" }),
    path({ "d": "M3 9v1" }),
    path({ "d": "M21 9v2" }),
    path({ "d": "M3 14v1" }),
  );
};
