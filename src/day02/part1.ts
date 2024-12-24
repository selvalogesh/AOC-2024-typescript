// Advent of Code - Day 2 - Part One

function safeCheck(rptArr: number[]): boolean {
  const gate = rptArr[1] - rptArr[2];
  if(gate === 0) return false;
  const multiplier = gate > 0 ? 1 : -1;
  for(let i = 1  ; i < (rptArr.length)-1; i++){
    const diff = multiplier * (rptArr[i] - rptArr[i+1]);
    if(diff <= 0 || diff >= 4) return false;
  }
  return true;
}

export function part1(input: string): number {
  let count = 0;
  const arr = input.split("\n");
  for(const itm of arr) {
    const numArr = itm.split(" ").map(x => Number.parseInt(x));
    if(safeCheck(numArr)) {count++;}
  };
  return count;
}