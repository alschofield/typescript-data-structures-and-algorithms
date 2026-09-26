import { describe, expect, it } from "vitest";
import { PrefixTrie } from "./prefix-trie";

describe("Prefix Trie", () => {
  it("exports the required PrefixTrie API", () => {
    expect(PrefixTrie).toBeDefined();
  });

  it("stores complete words while preserving shared prefixes", () => {
    const trie = new PrefixTrie();
    trie.insert("cat");
    trie.insert("car");
    trie.insert("dog");

    expect(trie.size()).toBe(3);
    expect(trie.char_count).toBe(7);
    expect(trie.contains("cat")).toBe(true);
    expect(trie.contains("car")).toBe(true);
    expect(trie.contains("ca")).toBe(false);
    expect(trie.startsWith("ca")).toBe(true);
    expect(trie.startsWith("do")).toBe(true);
    expect(trie.startsWith("cab")).toBe(false);
  });

  it("tracks duplicate metadata without increasing distinct word count", () => {
    const trie = new PrefixTrie();
    trie.insert("cat");
    trie.insert("cat");
    expect(trie.size()).toBe(1);
    expect(trie.contains("cat")).toBe(true);
    expect(trie.char_count).toBe(3);
  });

  it("removes terminal words and prunes only unused nodes", () => {
    const trie = new PrefixTrie();
    trie.insert("cat");
    trie.insert("car");
    trie.insert("dog");
    expect(trie.remove("ca")).toBe(false);
    expect(trie.remove("cat")).toBe(true);
    expect(trie.contains("cat")).toBe(false);
    expect(trie.contains("car")).toBe(true);
    expect(trie.startsWith("ca")).toBe(true);
    expect(trie.char_count).toBe(6);
    expect(trie.remove("car")).toBe(true);
    expect(trie.startsWith("ca")).toBe(false);
    expect(trie.size()).toBe(1);
  });

  it("supports empty-string insertion and removal", () => {
    const trie = new PrefixTrie();
    expect(trie.startsWith("")).toBe(true);
    expect(trie.contains("")).toBe(false);
    trie.insert("");
    expect(trie.contains("")).toBe(true);
    expect(trie.remove("")).toBe(true);
    expect(trie.contains("")).toBe(false);
    expect(trie.size()).toBe(0);
  });
});
