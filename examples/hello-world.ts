import { faast } from "faastjs";
import * as funcs from "./functions";

(async () => {
    // Create infrastructure on the fly.
    const m = await faast("aws", funcs);
    // Invoke lambda function and await the result.
    console.log(await m.functions.hello("world"));
    // Leave no infrastructure behind.
    await m.cleanup();
})();
