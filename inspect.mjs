import * as StackModule from "@stackframe/stack";

console.log("Exports:", Object.keys(StackModule));
if (StackModule.StackHandler) console.log("StackHandler type:", typeof StackModule.StackHandler);
if (StackModule.StackServerApp) {
    const app = new StackModule.StackServerApp({ tokenStore: "nextjs-cookie" });
    console.log("App instance keys:", Object.keys(app));
}
