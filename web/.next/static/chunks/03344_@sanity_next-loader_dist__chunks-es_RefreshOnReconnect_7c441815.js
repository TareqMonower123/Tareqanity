(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/.pnpm/@sanity+next-loader@2.1.1_@_276aca508141d6357f6c0f1f552b7203/node_modules/@sanity/next-loader/dist/_chunks-es/RefreshOnReconnect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RefreshOnReconnect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$2_$40$babel$2b$core$40$7$2e$2_0c38436d94fd4d44dcc71f4143339bd9$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.2_@babel+core@7.2_0c38436d94fd4d44dcc71f4143339bd9/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$2_$40$babel$2b$core$40$7$2e$2_0c38436d94fd4d44dcc71f4143339bd9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.2_@babel+core@7.2_0c38436d94fd4d44dcc71f4143339bd9/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
function RefreshOnReconnect() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$2_$40$babel$2b$core$40$7$2e$2_0c38436d94fd4d44dcc71f4143339bd9$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$2_$40$babel$2b$core$40$7$2e$2_0c38436d94fd4d44dcc71f4143339bd9$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RefreshOnReconnect.useEffect": ()=>{
            const controller = new AbortController(), { signal } = controller;
            return window.addEventListener("online", {
                "RefreshOnReconnect.useEffect": ()=>router.refresh()
            }["RefreshOnReconnect.useEffect"], {
                passive: !0,
                signal
            }), ({
                "RefreshOnReconnect.useEffect": ()=>controller.abort()
            })["RefreshOnReconnect.useEffect"];
        }
    }["RefreshOnReconnect.useEffect"], [
        router
    ]), null;
}
RefreshOnReconnect.displayName = "RefreshOnReconnect";
;
 //# sourceMappingURL=RefreshOnReconnect.js.map
}),
]);

//# sourceMappingURL=03344_%40sanity_next-loader_dist__chunks-es_RefreshOnReconnect_7c441815.js.map