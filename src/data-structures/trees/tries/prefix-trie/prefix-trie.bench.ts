import { bench, describe } from "vitest";
import { PrefixTrie } from "./prefix-trie";

const words = Array.from({ length: 100 }, (_, index) => `prefix-${index.toString().padStart(3, "0")}`);

describe("PrefixTrie", () => {
  let trie: PrefixTrie;

  bench("insert shared prefix", () => {
    for (const word of words) trie.insert(word);
  }, { setup: () => { trie = new PrefixTrie(); } });

  bench("contains", () => {
    for (const word of words) trie.contains(word);
  }, { setup: () => { trie = trieWithWords(); } });

  bench("startsWith", () => {
    for (let index = 0; index < 100; index += 1) trie.startsWith("prefix-");
  }, { setup: () => { trie = trieWithWords(); } });

  bench("remove", () => {
    for (const word of words) trie.remove(word);
  }, { setup: () => { trie = trieWithWords(); } });
});

function trieWithWords(): PrefixTrie {
  const trie = new PrefixTrie();
  for (const word of words) trie.insert(word);
  return trie;
}
