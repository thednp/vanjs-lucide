// VanJS Lucide - ParkingMeter
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ParkingMeter = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 15h2" }),
    path({ "d": "M12 12v3" }),
    path({ "d": "M12 19v3" }),
    path({
      "d":
        "M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z",
    }),
    path({ "d": "M9 9a3 3 0 1 1 6 0" }),
  );
};
