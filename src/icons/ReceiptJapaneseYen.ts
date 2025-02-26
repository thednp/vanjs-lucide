// VanJS Lucide - ReceiptJapaneseYen
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ReceiptJapaneseYen = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
    }),
    path({ "d": "m12 10 3-3" }),
    path({ "d": "m9 7 3 3v7.5" }),
    path({ "d": "M9 11h6" }),
    path({ "d": "M9 15h6" }),
  );
};
