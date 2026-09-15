/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Grid2x2.ts
const Grid2x2 = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3v18" }), path({ "d": "M3 12h18" }), rect({
		"x": "3",
		"y": "3",
		width: "18",
		height: "18",
		rx: "2"
	}));
};
//#endregion
export { Grid2x2 };

//# sourceMappingURL=Grid2x2.js.map