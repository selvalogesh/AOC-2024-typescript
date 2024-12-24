// Advent of Code - Day 1 - Part One

export function part1(input: string): number {
  const l1: number[] = [];
  const l2: number[] = [];
  const arr = input.split("\n");
  for(const itm of arr) {
    const [i1, i2] = itm.trim().split("   ");
    l1.push(Number.parseInt(i1));
    l2.push(Number.parseInt(i2));
  };
  const s1 = l1.sort();
  const s2 = l2.sort();
  return s1.reduce((sum, cur, i) => sum + Math.abs(cur - s2[i]),0);
}