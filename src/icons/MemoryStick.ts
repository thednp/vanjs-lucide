// VanJS Lucide - MemoryStick
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MemoryStick = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 19v-3" }),
    path({ "d": "M10 19v-3" }),
    path({ "d": "M14 19v-3" }),
    path({ "d": "M18 19v-3" }),
    path({ "d": "M8 11V9" }),
    path({ "d": "M16 11V9" }),
    path({ "d": "M12 11V9" }),
    path({ "d": "M2 15h20" }),
    path({
      "d":
        "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",
    }),
  );
};
