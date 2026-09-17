import { bench, describe } from "vitest";
import { HashTable } from "./separate-chaining";

describe("HashTable", () => {
  bench("set distinct keys", () => {
    const table = tableWithCapacity(2_048);
    for (let index = 0; index < 1_000; index += 1) table.set(`key-${index}`, index);
  });

  bench("get collision chain", () => {
    const table = new HashTable<string, number>(2_048, () => 0, (left, right) => left === right);
    for (let index = 0; index < 1_000; index += 1) table.set(`key-${index}`, index);
    for (let index = 0; index < 1_000; index += 1) table.get(`key-${index}`);
  });

  bench("setResize", () => {
    const table = tableWithCapacity(4);
    for (let index = 0; index < 1_000; index += 1) table.setResize(`key-${index}`, index);
  });
});

function tableWithCapacity(capacity: number): HashTable<string, number> {
  return new HashTable(capacity, stringHash, (left, right) => left === right);
}

function stringHash(key: string | undefined): number {
  let hash = 0;
  for (const character of key ?? "") hash = hash * 31 + character.charCodeAt(0);
  return hash;
}
