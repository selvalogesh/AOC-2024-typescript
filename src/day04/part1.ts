// Advent of Code - Day 4 - Part One

function countVerticalAndDiagonal(input: Array<string>[]) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      //vertical counting
      if (input[i][j] === 'X' && input[i + 1]?.[j] === 'M' && input[i + 2]?.[j] === 'A' && input[i + 3]?.[j] === 'S') { count++; }
      //diagonal counting right
      if (input[i][j] === 'X' && input[i + 1]?.[j + 1] === 'M' && input[i + 2]?.[j + 2] === 'A' && input[i + 3]?.[j + 3] === 'S') { count++; }
      //diagonal counting left
      if (input[i][j] === 'X' && input[i + 1]?.[j - 1] === 'M' && input[i + 2]?.[j - 2] === 'A' && input[i + 3]?.[j - 3] === 'S') { count++; }
    }
  }
  return count;
}

export function part1(input: string): number {
  let count = 0;
  const horizontal = input.matchAll(/XMAS/g);
  const horizontalRev = input.matchAll(/SAMX/g);
  while (!horizontal.next().done) {
    count++;
  }
  while (!horizontalRev.next().done) {
    count++;
  }
  // input = input.replace(/XMAS|SAMX/g, "0000");
  // vertical and diagonal
  const twoDArr = input.split('\n').map(x => x.split(''));
  count += countVerticalAndDiagonal(twoDArr);
  twoDArr.reverse();
  count += countVerticalAndDiagonal(twoDArr);
  return count;
}