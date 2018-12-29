import { LocalCache } from "../src/cache";
import { sleep } from "./functions";
import { createHash } from "crypto";
import * as uuidv4 from "uuid/v4";

describe("Local cache", () => {
    let cache: LocalCache;
    const nonce = uuidv4();

    beforeEach(() => {
        cache = new LocalCache(`.faast/test/${nonce}`);
    });

    afterEach(async () => {
        await cache.clear({ leaveEmptyDir: false });
    });

    test("local cache directory respects relative path", async () => {
        expect(cache.dir).toMatch(/test/);
    });

    test("handles missing cache entries", async () => {
        expect(await cache.get("foo")).toBeUndefined();
    });

    test("can set and get cache entries", async () => {
        await cache.set("foo", "bar");
        const result = await cache.get("foo");
        expect(result && result.toString()).toBe("bar");
    });

    test("ignores entries after they expire", async () => {
        const cache2 = new LocalCache(cache.dirRelativeToHomeDir, 100);
        await cache2.set("foo", "bar");
        let result = await cache2.get("foo");
        expect(result && result.toString()).toBeDefined();
        await sleep(101);
        result = await cache2.get("foo");
        expect(result && result.toString()).toBeUndefined();
    });

    test("keys can be sha256 hashes", async () => {
        const hasher = createHash("sha256");
        hasher.update("input");
        const hash = hasher.digest("hex");
        await cache.set(hash, "value");
        const result = await cache.get(hash);
        expect(result && result.toString()).toBe("value");
    });

    test("cache value can be a Buffer", async () => {
        await cache.set("key", Buffer.from("value"));
        const result = await cache.get("key");
        expect(result && result.toString()).toBe("value");
    });

    test("cache values are persistent", async () => {
        await cache.set("persistentKey", "persistent");
        const cache2 = new LocalCache(cache.dirRelativeToHomeDir);
        const result2 = await cache2.get("persistentKey");
        expect(result2 && result2.toString()).toBe("persistent");
    });

    test("clearing cache", async () => {
        await cache.set("key", "value");
        const value = await cache.get("key");
        expect(value && value.toString()).toBe("value");
        await cache.clear();
        expect(await cache.get("key")).toBeUndefined();
    });
});
