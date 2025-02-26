// VanJS Lucide - FileStack
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FileStack = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 7h-3a2 2 0 0 1-2-2V2" }),
    path({
      "d":
        "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",
    }),
    path({ "d": "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" }),
    path({ "d": "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11" }),
  );
};
