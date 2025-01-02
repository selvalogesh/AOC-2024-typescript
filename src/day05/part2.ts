// Advent of Code - Day 5 - Part Two

function swap(arr: number[], i: number, j: number): void {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function swapInvalid(
  arr: number[],
  rulesObj: { [index: number]: Set<number> },
): number {
  let swaped = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (rulesObj[arr[i]]?.has(arr[j])) {
        swap(arr, i, j);
        swaped = true;
        i--;
        break;
      }
    }
  }
  return swaped ? arr[Math.floor(arr.length / 2)] : 0;
}

export function part2(input: string): number {
  let count = 0;
  const [rules, updates] = input.split(/^\s*$/m);
  const rulesArr = rules.trim().split('\n');
  const updatesArr = updates.trim().split('\n');
  const rulesObj: { [index: number]: Set<number> } = {};
  for (const rule of rulesArr) {
    const [pageBefore, pageAfter] = rule.split('|').map((x) => parseInt(x));
    if (rulesObj[pageAfter]) rulesObj[pageAfter].add(pageBefore);
    else rulesObj[pageAfter] = new Set([pageBefore]);
  }
  for (const updateLine of updatesArr) {
    const parseUpdate = updateLine.split(',').map((x) => parseInt(x));
    parseUpdate.reverse();
    count += swapInvalid(parseUpdate, rulesObj);
  }
  return count;
}
