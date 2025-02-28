// entry-client.ts
import van from "vanjs-core";
import App from "./app.ts";
import { hydrate } from "@vanjs/client";

const root = document.getElementById("app") as HTMLElement;

van.hydrate(root, (dom) => hydrate(dom, App()));
