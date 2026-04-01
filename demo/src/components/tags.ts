// import Tags from "./tags.json";

export type TagEntries = [string, string[]][];

// export const TagsEntries = Object.entries(Tags);
// export const TagNames = TagsEntries.map(([name]) => name);

let Tags: typeof import("./tags.json")

export const getTags = async () => {
  Tags = Tags || await import("./tags.json");
  const entries = Object.entries(Tags);
  const names = entries.map(([name]) => name);
  return {
    entries,
    names,
  }
};
