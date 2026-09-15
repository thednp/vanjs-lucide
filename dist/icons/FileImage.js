/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/FileImage.ts
const FileImage = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), circle({
		cx: "10",
		cy: "12",
		"r": "2"
	}), path({ "d": "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" }));
};
//#endregion
export { FileImage };

//# sourceMappingURL=FileImage.js.map