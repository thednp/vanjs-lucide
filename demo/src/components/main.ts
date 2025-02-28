import van from "vanjs-core";
import * as vanX from "vanjs-ext";
import copyToClipboard from "../util/copyToClipboard";
import { SVGTag } from "../../../src/types";
import Tooltip from "./tooltip";
import Tags from "./tags.json";

const TagsEntries = Object.entries(Tags);
const TagNames = () => TagsEntries.map(([name]) => name);

import { Activity } from "../../../src/icons/Activity.ts";
import { Info } from "../../../src/icons/Info.ts";
import { ArrowRight } from "../../../src/icons/ArrowRight.ts";

type ChangeEvent<T extends EventTarget & Element = HTMLInputElement> =
  & InputEvent
  & { target: T };

export default function Main() {
  const { circle, path, svg } = van.tags("http://www.w3.org/2000/svg");
  const { main, div, button, span, h2, img, p, pre, a, label, input } =
    van.tags;
  const List = vanX.reactive<{ icons: Record<string, typeof SVGTag>[] }>({
    icons: [],
  });
  const size = van.state(32);
  const sWidth = van.state(1);
  const count = van.state(64);
  const query = van.state("");
  const fetching = van.state(false);
  const fetchIcons = async (items: string[]) => {
    // const isFetching = fetching.oldVal;
    const len = items.length;
    return await import(`../../../src/index.ts`).then((module) => {
      // return await import(`vanjs-lucide`).then((module) => {
      const newIcons: Record<string, typeof SVGTag>[] = [];
      let icon;
      for (let i = 0; i < len; i += 1) {
        icon = module[items[i] as string & keyof typeof module];
        newIcons.push({ [items[i]]: icon });
      }
      // fetching.val = false;
      return newIcons;
    });
  };

  const loader = div(
    {
      "data-fetching": fetching,
      class:
        "w-full flex flex-col items-center mt-4 py-4 rounded-lg bg-stone-50 dark:bg-stone-950 opacity-0 data-[fetching=true]:opacity-100",
    },
    svg(
      {
        class: "size-5 animate-spin text-current",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
      },
      circle({
        class: "opacity-25",
        cx: "12",
        cy: "12",
        "r": "10",
        stroke: "currentColor",
        "stroke-width": "4",
      }),
      path({
        class: "opacity-75",
        fill: "currentColor",
        "d":
          "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
      }),
    ),
  );
  const startObserver = () => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(([entry] /*currentObserver*/) => {
      if (entry.isIntersecting && count.oldVal < TagsEntries.length) {
        const remaining = TagsEntries.length - count.oldVal;
        count.val = count.oldVal + (remaining < 64 ? remaining : 64);
      }
      // if (count.val >= TagsEntries.length) {
      //   currentObserver.disconnect();
      //   // loader.remove();
      // }
    }, { rootMargin: "100px" });
    observer.observe(loader);
  };

  startObserver();

  van.derive(() => {
    const currentQuery = query.val;
    const currentQueryMulti = currentQuery.split(/\s|\-/);
    const currentCount = count.val;
    if (currentQuery.length && currentQuery.length) {
      const searchResults = TagsEntries.filter(([name, tags]) => {
        const lowerName = name.toLowerCase();
        return currentQueryMulti.some((q) => lowerName === q) ||
          currentQueryMulti.some((q) => lowerName.includes(q)) ||
          tags.some((t) =>
            currentQueryMulti.some((q) => q === t || t.includes(q))
          );
      });
      if (searchResults.length) {
        const iconsList = searchResults.map(([val]) => val);
        // console.log(iconsList)
        fetching.val === true;

        fetchIcons(iconsList).then((results) => {
          vanX.replace(List.icons, results);
          fetching.val === false;
        });

        // vanX.replace(List.icons, searchResults);
      } else {
        vanX.replace(List.icons, [{
          "not-found": Info,
        }]);
      }

      // loader.remove();
      // count.val = Icons.length;
      count.val = 64;
    } else if (currentCount < TagsEntries.length) {
      const newList = TagNames().slice(0, currentCount);
      fetching.val === true;

      fetchIcons(newList).then((results) => {
        vanX.replace(List.icons, results);
        fetching.val === false;
      });
      // vanX.replace(List.icons, Icons.slice(0, currentCount));
      // } else {
      // vanX.replace(List.icons, Icons);
    }
  });

  return main(
    { class: "main" },
    div(
      {
        class:
          "container h-[50vh] md:h-[75vh] px-5 mx-auto flex flex-row items-center",
      },
      div(
        { class: "w-full flex flex-col md:flex-row items-center" },
        div(
          {
            class:
              "w-full lg:w-1/2 my-8 flex flex-col sm:flex-row gap-6 sm:items-center",
          },
          img({
            src: "./vanjs.svg",
            class: "w-20 h-20",
            alt: "VanJS logo",
            width: "80",
            height: "80",
          }),
          div(
            h2(
              {
                class:
                  "text-xl md:text-2xl font-light font-stretch-125% text-black dark:text-white",
              },
              "Lucide Icons for VanJS",
            ),
            p(
              { class: "font-stretch-125% font-bold" },
              "Powered by Vite, Vitest & Typescript",
            ),
          ),
        ),
        div(
          {
            class: "hidden w-1/2 xl:w-1/3 xl:ml-auto lg:flex flex-row",
          },
          div(
            {
              class:
                "w-full my-8 p-4 bg-gray-500/10 rounded-lg flex flex-row items-center",
            },
            label(
              { for: "stroke", class: "m-2" },
              "Stroke",
              input({
                class: "ml-2 text-right border border-gray-500/30 rounded",
                placeholder: "Set stroke-width",
                name: "stroke",
                id: "stroke",
                value: sWidth,
                step: 0.1,
                min: 0.1,
                max: 5,
                type: "number",
                onchange: (e: ChangeEvent) =>
                  sWidth.val = Number(e.target.value),
              }),
            ),
            label(
              { for: "size", class: "m-2" },
              "Size",
              input({
                class: "ml-2 text-right border border-gray-500/30 rounded",
                placeholder: "Set width and height",
                name: "size",
                id: "size",
                value: size,
                min: 24,
                max: 128,
                type: "number",
                onchange: (e: ChangeEvent) => size.val = Number(e.target.value),
              }),
            ),
            Activity({
              class: "h-auto self-center max-w-full ml-auto",
              "stroke-width": sWidth,
              width: size,
              height: size,
            }),
          ),
        ),
      ),
    ),
    div(
      { class: "bg-stone-300 dark:bg-stone-800" },
      div(
        {
          class:
            "container h-[100vh] lg:h-[75vh] px-5 mx-auto flex flex-row items-center",
        },
        div(
          { class: "w-full flex flex-row gap-[5rem] flex-wrap" },
          div(
            { id: "installation", class: "lg:w-[calc(50%-2.5rem)]" },
            h2(
              {
                class:
                  "mb-5 text-2xl font-light font-stretch-125% text-black dark:text-white",
              },
              "Installation",
            ),
            pre(
              { class: "font-mono mb-10 whitespace-pre-line" },
              "> npm install vanjs-lucide\n",
              "> pnpm add vanjs-lucide\n",
              "> deno add npm:vanjs-lucide\n",
              "> bun add vanjs-lucide",
            ),
          ),
          div(
            { id: "usage", class: "w-full lg:w-[calc(50%-2.5rem)]" },
            h2(
              {
                class:
                  "mb-5 text-2xl font-light font-stretch-125% text-black dark:text-white",
              },
              "Usage",
            ),
            div(
              {
                class:
                  "mb-5 max-w-full overflow-x-auto whitespace-nowrap scrollbar",
              },
              pre(
                { class: "font-mono whitespace-pre-line w-max" },
                span(
                  { class: "text-sky-800 dark:text-sky-300" },
                  "// import the icon(s)\n",
                ),
                'import { Activity } from "vanjs-lucide";\n\n',
                span(
                  { class: "text-sky-800 dark:text-sky-300" },
                  "// call anywhere within VanJS codespace\n",
                ),
                'Activity({ class: "icon" })\n\n',
                span(
                  { class: "text-sky-800 dark:text-sky-300" },
                  "// even with JSX transformation\n",
                ),
                '<Activity class="icon" />\n',
              ),
            ),
            div(
              { class: "flex flex-col md:flex-row gap-5 my-10" },
              a(
                {
                  class: "py-3 flex items-center gap-3",
                  href: "https://github.com/thednp/vanjs-lucide",
                  target: "_blank",
                  title: "Get more guides on Github page",
                },
                "More guides",
                ArrowRight({ class: "w-6 h-auto" }),
              ),
              a(
                {
                  class: "py-3 flex items-center gap-3",
                  href: "#preview",
                  title: "Click to preview the icons",
                },
                "Preview Icons",
                ArrowRight({ class: "w-6 h-auto" }),
              ),
            ),
          ),
        ),
      ),
    ),
    div(
      { id: "preview", class: "container p-5 mx-auto my-20" },
      div(
        { class: "flex flex-row mb-5 " },
        h2(
          {
            class:
              "text-2xl font-light font-stretch-125% text-black dark:text-white",
          },
          "Preview",
        ),
        input({
          class:
            "ml-auto min-w-20 w-48 px-3 py-2 border border-stone-500/30 rounded autofill:!bg-transparent",
          placeholder: "Find icon",
          name: "query",
          id: "query",
          value: query,
          type: "text",
          autocomplete: "off",
          spellcheck: "false",
          "aria-label": "Search 1560 icons..",
          oninput: (e: ChangeEvent) => query.val = String(e.target.value),
        }),
      ),
      vanX.list(
        div({
          class:
            "grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 grid-flow-row gap-4",
        }),
        List.icons,
        (item) => {
          const [name, icon] = Object.entries(item.val)[0];
          const lowerName = name.toLowerCase();
          const realName = lowerName === "not-found" ? "No icon found" : name;
          // console.log({ name, icon, lowerName })

          return Tooltip(
            {
              tip: name,
            },
            button(
              {
                type: "button",
                "data-clip":
                  `${name}({ width: ${size.val}, height: ${size.val}, "stroke-width": ${sWidth.val} })`,
                onclick: lowerName !== "not-found" as "Activity"
                  ? copyToClipboard
                  : null,
                class:
                  "w-full flex flex-col items-center cursor-pointer p-3 py-8 xl:py-12 rounded-[5px] bg-stone-50 hover:bg-stone-200 dark:bg-stone-950 dark:hover:bg-stone-800",
              },
              icon({
                class: "text-stone-500 mb-4",
                width: size,
                height: size,
                "stroke-width": sWidth,
              }),
              span(
                {
                  id: `lucide-icon-${lowerName}`,
                  class:
                    "text-[12px] font-semibold font-stretch-90% text-black dark:text-white",
                },
                realName,
              ),
            ),
          );
        },
      ),
      loader,
    ),
  );
}
