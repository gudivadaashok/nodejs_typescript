import { bubbleSort, mergeSort, quickSort } from '../algorithms/Sorting';
import { linearSearch, binarySearch } from '../algorithms/Searching';

describe('Sorting algorithms', () => {
  const unsorted = [64, 34, 25, 12, 22, 11, 90];
  const sorted = [11, 12, 22, 25, 34, 64, 90];

  it.each([
    ['bubbleSort', bubbleSort],
    ['mergeSort', mergeSort],
    ['quickSort', quickSort],
  ])('%s sorts an unsorted array', (_name, sortFn) => {
    expect(sortFn(unsorted)).toEqual(sorted);
  });

  it.each([
    ['bubbleSort', bubbleSort],
    ['mergeSort', mergeSort],
    ['quickSort', quickSort],
  ])('%s handles empty and single-element arrays', (_name, sortFn) => {
    expect(sortFn([])).toEqual([]);
    expect(sortFn([42])).toEqual([42]);
  });

  it('bubbleSort does not mutate the input array', () => {
    const input = [3, 1, 2];
    bubbleSort(input);
    expect(input).toEqual([3, 1, 2]);
  });
});

describe('Searching algorithms', () => {
  const sorted = [11, 12, 22, 25, 34, 64, 90];

  it('linearSearch finds the index of a present element', () => {
    expect(linearSearch(sorted, 25)).toBe(3);
  });

  it('linearSearch returns -1 when not found', () => {
    expect(linearSearch(sorted, 99)).toBe(-1);
  });

  it('binarySearch finds the index of a present element', () => {
    expect(binarySearch(sorted, 25)).toBe(3);
  });

  it('binarySearch returns -1 when not found', () => {
    expect(binarySearch(sorted, 99)).toBe(-1);
  });
});
