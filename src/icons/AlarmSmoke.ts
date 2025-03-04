// VanJS Lucide - AlarmSmoke
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlarmSmoke = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 21c0-2.5 2-2.5 2-5" }),
    path({ "d": "M16 21c0-2.5 2-2.5 2-5" }),
    path({
      "d": "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8",
    }),
    path({
      "d":
        "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z",
    }),
    path({ "d": "M6 21c0-2.5 2-2.5 2-5" }),
  );
};
