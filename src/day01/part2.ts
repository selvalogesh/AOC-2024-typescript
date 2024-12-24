// Advent of Code - Day 1 - Part Two

export function part2(input: string): number {
  const l1: number[] = [];
  const l2: { [key: number]: number }= {};
  const arr = input.split("\n");
  for(const itm of arr) {
    const [i1, i2] = itm.trim().split("   ");
    l1.push(Number.parseInt(i1));
    const n2 = Number.parseInt(i2);
    if(l2[n2]) {l2[n2]++;}
    else {l2[n2] = 1}; 
  };
  return l1.reduce((sum, cur) => sum + (cur * (l2[cur] ?? 0)), 0);
}