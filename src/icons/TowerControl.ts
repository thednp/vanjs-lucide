// VanJS Lucide - TowerControl
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TowerControl = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",
    }),
    path({ "d": "M8 13v9" }),
    path({ "d": "M16 22v-9" }),
    path({ "d": "m9 6 1 7" }),
    path({ "d": "m15 6-1 7" }),
    path({ "d": "M12 6V2" }),
    path({ "d": "M13 2h-2" }),
  );
};
