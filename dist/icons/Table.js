/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Table.ts
const Table = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3v18" }), rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M3 9h18" }), path({ "d": "M3 15h18" }));
};
//#endregion
export { Table };

//# sourceMappingURL=Table.js.map