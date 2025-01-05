// Advent of Code - Day 6 - Part Two

function countX(arr: string[][]) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === 'X') count++;
    }
  }
  return count;
}

function findGuard(arr: string[][]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '^') {
        return { i, j };
      }
    }
  }
  return { i: NaN, j: NaN };
}

export function part2(input: string): number {
  const turns: { guard: string; i: number; j: number }[] = [];
  const arr = input.split('\n');
  const parsedArr: string[][] = [[]];
  for (let i = 0; i < arr.length; i++) {
    parsedArr[i] = arr[i].split('');
  }
  // search for i,j of ^ guard
  let guard = '^';
  let { i, j } = findGuard(parsedArr);
  // initial position
  turns.push({ guard: '#', i, j });
  // start loop for guard moment until i,j within limit, marking the spots with X
  while (i < arr.length && j < arr[i].length) {
    parsedArr[i][j] = 'X';
    switch (guard) {
      case '^':
        i--;
        break;
      case '>':
        j++;
        break;
      case '!':
        i++;
        break;
      case '<':
        j--;
        break;
    }
    if (parsedArr[i]?.[j] === '#') {
      switch (guard) {
        case '^':
          i++;
          guard = '>';
          j++;
          break;
        case '>':
          j--;
          guard = '!';
          i++;
          break;
        case '!':
          i--;
          guard = '<';
          j--;
          break;
        case '<':
          j++;
          guard = '^';
          i--;
          break;
      }
      turns.push({ guard, i, j });
    }
  }
  console.log(turns);
  // count all the X marked spot and return
  return countX(parsedArr);
}
