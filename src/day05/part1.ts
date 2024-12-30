// Advent of Code - Day 5 - Part One

function checkValid(arr: number[], rulesObj: { [index: number]: Set<number> }): boolean {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (rulesObj[arr[i]]?.has(arr[j])) return false;
    }
  }
  return true;
}

export function part1(input: string): number {
  let count = 0;
  const [rules, updates] = input.split(/^\s*$/m);
  const rulesArr = rules.trim().split("\n");
  const updatesArr = updates.trim().split("\n");
  const rulesObj: { [index: number]: Set<number> } = {};
  for (const rule of rulesArr) {
    const [pageBefore, pageAfter] = rule.split("|").map(x => parseInt(x));
    if (rulesObj[pageAfter]) rulesObj[pageAfter].add(pageBefore);
    else rulesObj[pageAfter] = new Set([pageBefore]);
  }
  for (const updateLine of updatesArr) {
    const parseUpdate = updateLine.split(",").map(x => parseInt(x));
    parseUpdate.reverse();
    if (checkValid(parseUpdate, rulesObj)) count += parseUpdate[Math.floor(parseUpdate.length / 2)];
  }
  return count;
}