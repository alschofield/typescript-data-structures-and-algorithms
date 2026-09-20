import { bench, describe } from "vitest";
import { PrefixTrie } from "./prefix-trie";

const words = Array.from({ length: 100 }, (_, index) => `prefix-${index.toString().padStart(3, "0")}`);

describe("PrefixTrie", () => {
  bench("insert shared prefix", () => {
    const trie = new PrefixTrie();
    for (const word of words) trie.insert(word);
  });

  bench("contains", () => {
    const trie = trieWithWords();
    for (const word of words) trie.contains(word);
  });

  bench("startsWith", () => {
    const trie = trieWithWords();
    for (let index = 0; index < 100; index += 1) trie.startsWith("prefix-");
  });

  bench("remove", () => {
    const trie = trieWithWords();
    for (const word of words) trie.remove(word);
  });
});

function trieWithWords(): PrefixTrie {
  const trie = new PrefixTrie();
  for (const word of words) trie.insert(word);
  return trie;
}
