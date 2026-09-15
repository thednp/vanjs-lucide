/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Vault.ts
const Vault = (props = {}) => {
	const { rect, circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), circle({
		cx: "7.5",
		cy: "7.5",
		"r": ".5",
		fill: "currentColor"
	}), path({ "d": "m7.9 7.9 2.7 2.7" }), circle({
		cx: "16.5",
		cy: "7.5",
		"r": ".5",
		fill: "currentColor"
	}), path({ "d": "m13.4 10.6 2.7-2.7" }), circle({
		cx: "7.5",
		cy: "16.5",
		"r": ".5",
		fill: "currentColor"
	}), path({ "d": "m7.9 16.1 2.7-2.7" }), circle({
		cx: "16.5",
		cy: "16.5",
		"r": ".5",
		fill: "currentColor"
	}), path({ "d": "m13.4 13.4 2.7 2.7" }), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}));
};
//#endregion
export { Vault };

//# sourceMappingURL=Vault.js.map