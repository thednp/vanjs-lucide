import van from "vanjs-core";
import { CloudDownload, Github } from "../../../src/index";

export default function Header() {
  const { header, div, ul, li, a, h1, span } = van.tags;
  return header(
    { class: "sticky top-0", style: "z-index: 1;" },
    div({
      class: "absolute inset-0 bg-neutral-500/25 backdrop-blur-sm",
    }),
    ul(
      { class: "relative container px-5 mx-auto flex flex-row gap-3" },
      li(
        { class: "py-3 flex flex-row items-center gap-3 text-xl" },
        h1(
          {
            class: "font-black font-stretch-125% text-black dark:text-white",
          },
          "VanJS ",
          span({ class: "font-light" }, "Lucide"),
        ),
      ),
      li(
        { class: "py-3 flex flex-row items-center gap-3 ml-auto text-md" },
        a(
          {
            class:
              "text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100 font-semibold font-stretch-125% flex items-center gap-2",
            href:
              "https://github.com/thednp/vanjs-lucide/archive/refs/heads/master.zip",
          },
          CloudDownload({ class: "h-6" }),
          span(
            { class: "sr-only sm:not-sr-only" },
            "Download",
          ),
        ),
      ),
      li(
        { class: "py-3 flex flex-row items-center gap-3 text-md" },
        a(
          {
            class:
              "text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100 font-semibold font-stretch-125% flex items-center gap-2",
            href: "https://github.com/thednp/vanjs-lucide/",
          },
          Github({ class: "h-6" }),
          span(
            { class: "sr-only sm:not-sr-only" },
            "Github",
          ),
        ),
      ),
    ),
  );
}
