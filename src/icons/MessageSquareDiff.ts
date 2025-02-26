// VanJS Lucide - MessageSquareDiff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MessageSquareDiff = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",
    }),
    path({ "d": "M9 10h6" }),
    path({ "d": "M12 7v6" }),
    path({ "d": "M9 17h6" }),
  );
};
