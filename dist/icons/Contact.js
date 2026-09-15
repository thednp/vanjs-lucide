/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Contact.ts
const Contact = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 2v2" }), path({ "d": "M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }), path({ "d": "M8 2v2" }), circle({
		cx: "12",
		cy: "11",
		"r": "3"
	}), rect({
		"x": "3",
		"y": "4",
		width: "18",
		height: "18",
		rx: "2"
	}));
};
//#endregion
export { Contact };

//# sourceMappingURL=Contact.js.map