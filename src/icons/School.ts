// VanJS Lucide - School
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const School = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 22v-4a2 2 0 1 0-4 0v4" }),
    path({
      "d":
        "m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10",
    }),
    path({ "d": "M18 5v17" }),
    path({ "d": "m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6" }),
    path({ "d": "M6 5v17" }),
    circle({ cx: "12", cy: "9", "r": "2" }),
  );
};
