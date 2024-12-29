// Advent of Code - Day 2

import { describe, expect, test } from 'vitest';
import { part1 } from '../part1.js';
import { part2 } from '../part2.js';

describe('Day 2', () => {
  test('Part 1', () => {
    expect(part1("")).toBe(1);
  });

  test('Part 2', () => {
    expect(part2("4 6 2 1")).toBe(1);
    expect(part2("40 41 43 44 47 46 47 49")).toBe(1);
    expect(part2("16 13 15 13 12 11 9 6")).toBe(1);
    expect(part2("91 92 95 93 94")).toBe(1);
    expect(part2("57 56 57 59 60 63 64 65")).toBe(1);
    expect(part2("100 2 3 4")).toBe(1);
    expect(part2("19 23 24 27 29")).toBe(1);
    expect(part2("23 19 24 27 29")).toBe(1);
    expect(part2("1 4 2 3 4 7")).toBe(1);
    expect(part2(`48 46 47 49 51 54 56`)).toBe(1);
    expect(part2(`1 1 2 3 4 5`)).toBe(1);
    expect(part2(`1 2 3 4 5 5`)).toBe(1);
    expect(part2(`5 1 2 3 4 5`)).toBe(1);
    expect(part2(`1 4 3 2 1`)).toBe(1);
    expect(part2(`1 6 7 8 9`)).toBe(1);
    expect(part2(`1 2 3 4 3`)).toBe(1);
    expect(part2(`9 8 7 6 7`)).toBe(1);
    expect(part2(`7 10 8 10 11`)).toBe(1);
    expect(part2(`29 28 27 25 26 25 22 20`)).toBe(1);
    expect(part2(`9 8 7 7 7`)).toBe(0);
    expect(part2(`1 1 1 1`)).toBe(0);
    expect(part2(`29 26 24 25 22`)).toBe(1);
    expect(part2(`68 65 69 72 74 77 80 83`)).toBe(1);
    expect(part2(`90 89 86 84 83 79`)).toBe(1);
    expect(part2(`97 96 93 91 85`)).toBe(1);
    expect(part2(`29 26 24 25 21`)).toBe(1);
    expect(part2(`36 37 40 43 47`)).toBe(1);
    expect(part2(`43 44 47 48 49 54`)).toBe(1);
    expect(part2(`35 33 31 29 27 25 22 18`)).toBe(1);
    expect(part2(`77 76 73 70 64`)).toBe(1);
    expect(part2(`68 65 69 72 74 77 80 83`)).toBe(1);
    expect(part2(`37 40 42 43 44 47 51`)).toBe(1);
    expect(part2(`70 73 76 79 86`)).toBe(1);
  });
});
