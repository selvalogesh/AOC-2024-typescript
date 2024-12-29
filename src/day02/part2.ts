// Advent of Code - Day 2 - Part Two

// couldn't address every case with loop something i was missing, good luck to whoever is reading
function safeCheckOneLevel(rptArr: number[]): boolean {
  const multiplier01 = rptArr[0] - rptArr[1] < 0 ? -1 : 1;
  const multiplier12 = rptArr[1] - rptArr[2] < 0 ? -1 : 1;
  let removeCnt = 0;
  let finalMultiplier = multiplier01;
  if (multiplier01 !== multiplier12) {
    removeCnt++;
    const multiplier23 = rptArr[2] - rptArr[3] < 0 ? -1 : 1;
    // index 2 is the anchor point
    const multiplier02 = rptArr[0] - rptArr[2] < 0 ? -1 : 1;
    const multiplier12 = rptArr[1] - rptArr[2] < 0 ? -1 : 1;
    finalMultiplier = multiplier23;
    if (multiplier02 === multiplier12 && multiplier02 === multiplier23) { // remove based on diff
      const diff02 = Math.abs(rptArr[0] - rptArr[2]);
      const diff12 = Math.abs(rptArr[1] - rptArr[2]);
      if (diff02 < diff12 && diff02 !== 0) {
        rptArr.splice(1, 1);
      } else {
        rptArr.splice(0, 1);
      }
    } else if (multiplier02 === multiplier23) { // remove index 1
      rptArr.splice(1, 1);
    } else if (multiplier12 === multiplier23) { // remove index 0
      rptArr.splice(0, 1)
    } else {
      return false;
    }
  }
  for (let i = 0; i < (rptArr.length) - 1; i++) {
    const diff = finalMultiplier * (rptArr[i] - rptArr[i + 1]);
    if (diff <= 0 || diff >= 4) {
      removeCnt++;
      if (removeCnt > 1) return false;
      if (i + 2 >= rptArr.length && removeCnt === 1) return true;
      const newAnchor = rptArr[i + 2];
      const diff02 = finalMultiplier * (rptArr[i] - newAnchor);
      const diff12 = finalMultiplier * (rptArr[i + 1] - newAnchor);
      if (diff02 <= 0 || diff12 < diff02) {
        rptArr.splice(i, 1);
        i = i - 2;
      } else {
        rptArr.splice(i + 1, 1);
        i--;
      }
    }
  }
  return true;
}


function safeCheckOneLevelCallStack(rptArr: number[], callbackIndex: number): boolean {

  const copyRptArr = JSON.parse(JSON.stringify(rptArr));
  if (callbackIndex !== -1) {
    copyRptArr.splice(callbackIndex, 1);
  }

  let safe = true;
  const multiplier = copyRptArr[0] - copyRptArr[1] > 0 ? 1 : -1;
  for (let i = 0; i < copyRptArr.length - 1; i++) {
    const diff = multiplier * (copyRptArr[i] - copyRptArr[i + 1]);
    safe &&= (diff >= 1 && diff <= 3);
    if (!safe) break;
  }

  if (!safe && callbackIndex === -1) {
    for (let i = 0; i < rptArr.length; i++) {
      safe ||= safeCheckOneLevelCallStack(rptArr, i);
      if (safe) break;
    }
  }

  return safe;
}

export function part2(input: string): number {
  let count = 0;
  const arr = input.split("\n");
  for (const itm of arr) {
    const numArr = itm.split(" ").map(x => Number.parseInt(x));
    if (safeCheckOneLevelCallStack(numArr, -1)) { count++; }
  };
  return count;
}