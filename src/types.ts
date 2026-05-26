/**
 * Common type definitions for DSA project
 */

export type Comparator<T> = (a: T, b: T) => number;

export interface Comparable<T> {
  compareTo(other: T): number;
}

export interface Traversable<T> {
  forEach(callback: (item: T) => void): void;
}

export interface Collection<T> {
  size(): number;
  isEmpty(): boolean;
  clear(): void;
}
