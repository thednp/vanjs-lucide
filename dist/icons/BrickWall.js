/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/BrickWall.ts
const BrickWall = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M12 9v6" }), path({ "d": "M16 15v6" }), path({ "d": "M16 3v6" }), path({ "d": "M3 15h18" }), path({ "d": "M3 9h18" }), path({ "d": "M8 15v6" }), path({ "d": "M8 3v6" }));
};
//#endregion
export { BrickWall };

//# sourceMappingURL=BrickWall.js.map