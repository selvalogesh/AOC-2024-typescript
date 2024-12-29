// Advent of Code - Day 4 - Part Two

function countVerticalAndDiagonal(input: Array<string>[]) {
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      let right = false;
      let left = false;
      //diagonal counting right
      if (((input[i - 1]?.[j - 1] === 'M' && input[i + 1]?.[j + 1] === 'S') || (input[i - 1]?.[j - 1] === 'S' && input[i + 1]?.[j + 1] === 'M')) && input[i][j] === 'A') { right = true; }
      //diagonal counting left
      if (((input[i - 1]?.[j + 1] === 'M' && input[i + 1]?.[j - 1] === 'S') || (input[i - 1]?.[j + 1] === 'S' && input[i + 1]?.[j - 1] === 'M')) && input[i][j] === 'A') { left = true; }
      if (right && left) count++;
    }
  }
  return count;
}

export function part2(input: string): number {
  let count = 0;
  const twoDArr = input.split('\n').map(x => x.split(''));
  count += countVerticalAndDiagonal(twoDArr);
  return count;
}