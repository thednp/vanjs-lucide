// VanJS Lucide - TrainTrack
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TrainTrack = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 17 17 2" }),
    path({ "d": "m2 14 8 8" }),
    path({ "d": "m5 11 8 8" }),
    path({ "d": "m8 8 8 8" }),
    path({ "d": "m11 5 8 8" }),
    path({ "d": "m14 2 8 8" }),
    path({ "d": "M7 22 22 7" }),
  );
};
