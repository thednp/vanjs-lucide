// VanJS Lucide - Container
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Container = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",
    }),
    path({ "d": "M10 21.9V14L2.1 9.1" }),
    path({ "d": "m10 14 11.9-6.9" }),
    path({ "d": "M14 19.8v-8.1" }),
    path({ "d": "M18 17.5V9.4" }),
  );
};
