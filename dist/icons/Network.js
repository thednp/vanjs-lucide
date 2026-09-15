/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Network.ts
const Network = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		"x": "16",
		"y": "16",
		width: "6",
		height: "6",
		rx: "1"
	}), rect({
		"x": "2",
		"y": "16",
		width: "6",
		height: "6",
		rx: "1"
	}), rect({
		"x": "9",
		"y": "2",
		width: "6",
		height: "6",
		rx: "1"
	}), path({ "d": "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" }), path({ "d": "M12 12V8" }));
};
//#endregion
export { Network };

//# sourceMappingURL=Network.js.map