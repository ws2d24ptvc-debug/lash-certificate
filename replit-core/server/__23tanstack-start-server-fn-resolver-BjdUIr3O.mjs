//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-BjdUIr3O.js
var manifest = {
	"20c816087cae98abf14488ef114e23151ffb71b712ccc008fadd8e6c45532246": {
		functionName: "inviteStudent_createServerFn_handler",
		importer: () => import("./_ssr/school.functions-x2P0I7hj.mjs")
	},
	"46123213d6d2f2cb21b46440648f460fc8372029b3e54125cba7056db1b1d94a": {
		functionName: "getLessonContent_createServerFn_handler",
		importer: () => import("./_ssr/school.functions-x2P0I7hj.mjs")
	},
	"c7e745d8bf2a148c40e8d2de62771fa924fc4bdad622f17af5f4a490e40e5d94": {
		functionName: "updateStudentAccess_createServerFn_handler",
		importer: () => import("./_ssr/school.functions-x2P0I7hj.mjs")
	},
	"e205a20b69aa34645601227e525daac5166fbd10c680a1376ea343b80442b234": {
		functionName: "listStudents_createServerFn_handler",
		importer: () => import("./_ssr/school.functions-x2P0I7hj.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
