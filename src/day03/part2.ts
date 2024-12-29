// Advent of Code - Day 3 - Part Two

function part1(input: string): number {
  let sum = 0;
  const matched = input.matchAll(/mul\([0-9]+,[0-9]+\)/g);
  for (const matchObj of matched) {
    const [match] = matchObj
    const [p1, p2] = match.split(",");
    const n1 = parseInt(p1.slice(4, p1.length));
    const n2 = parseInt(p2.slice(0, -1));
    sum += n1 * n2;
  }
  return sum;
}

export function part2(input: string): number {
  let sum = 0;
  const matchedUntilInst = input.match(/mul\([0-9]+,[0-9]+\)((?!don't\(\)|do\(\)).)*/m);
  const matchedDos = input.matchAll(/do\(\)((?!don't\(\)).|\n)*mul\([0-9]+,[0-9]+\)/g);
  const [matchUt] = matchedUntilInst ?? [''];
  sum += part1(matchUt);
  for (const matchObj of matchedDos) {
    const [match] = matchObj
    sum += part1(match);
  }
  return sum;
}