// Advent of Code - Day 1 - Part One

export function part1(input: string): number {
  const l1: number[] = [];
  const l2: number[] = [];
  const arr = input.split("\n");
  for (const itm of arr) {
    const [i1, i2] = itm.trim().split("   ");
    l1.push(Number.parseInt(i1));
    l2.push(Number.parseInt(i2));
  };
  l1.sort();
  l2.sort();
  return l1.reduce((sum, cur, i) => sum + Math.abs(cur - l2[i]), 0);
}