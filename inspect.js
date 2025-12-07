const { StackServerApp } = require("@stackframe/stack");

const app = new StackServerApp({ tokenStore: "nextjs-cookie" });
console.log("Keys:", Object.keys(app));
console.log("Prototype keys:", Object.getOwnPropertyNames(Object.getPrototypeOf(app)));
