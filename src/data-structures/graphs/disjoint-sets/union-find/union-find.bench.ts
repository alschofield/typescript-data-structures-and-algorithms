import { bench, describe } from "vitest";
import { UnionFind } from "./union-find";

describe("UnionFind", () => {
  let sets: UnionFind;

  bench("union 999 pairs", () => {
    for (let index = 1; index < 1_000; index += 1) sets.union(0, index);
  }, { setup: () => { sets = new UnionFind(1_000); } });

  bench("find compressed member", () => { sets.find(999); }, { setup: () => { sets = connectedSets(1_000); } });
  bench("connected compressed members", () => { sets.connected(500, 999); }, { setup: () => { sets = connectedSets(1_000); } });
  bench("setCount growth", () => { sets.setCount(2_000); }, { setup: () => { sets = new UnionFind(1_000); } });
});

function connectedSets(size: number): UnionFind {
  const sets = new UnionFind(size);
  for (let index = 1; index < size; index += 1) sets.union(0, index);
  return sets;
}
