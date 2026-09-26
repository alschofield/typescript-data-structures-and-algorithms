import { bench, describe } from "vitest";
import { HashTable } from "./separate-chaining";

describe("HashTable", () => {
  let table: HashTable<string, number>;

  bench("set distinct keys", () => {
    for (let index = 0; index < 1_000; index += 1) table.set(`key-${index}`, index);
  }, { setup: () => { table = tableWithCapacity(2_048); } });

  bench("get collision chain", () => {
    for (let index = 0; index < 1_000; index += 1) table.get(`key-${index}`);
  }, { setup: () => { table = collisionTable(); } });

  bench("build-and-setResize 1,000", () => {
    for (let index = 0; index < 1_000; index += 1) table.setResize(`key-${index}`, index);
  }, { setup: () => { table = tableWithCapacity(4); } });
});

function collisionTable(): HashTable<string, number> {
  const table = new HashTable<string, number>(2_048, () => 0, (left, right) => left === right);
  for (let index = 0; index < 1_000; index += 1) table.set(`key-${index}`, index);
  return table;
}

function tableWithCapacity(capacity: number): HashTable<string, number> {
  return new HashTable(capacity, stringHash, (left, right) => left === right);
}

function stringHash(key: string | undefined): number {
  let hash = 0;
  for (const character of key ?? "") hash = hash * 31 + character.charCodeAt(0);
  return hash;
}
