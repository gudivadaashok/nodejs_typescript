# DSA Project - Implementation Guide

This guide shows how to add new data structures and algorithms to the project.

## Adding a New Data Structure

### Example: Binary Search Tree

1. **Create the file** `src/data-structures/BinarySearchTree.ts`:

```typescript
export interface TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;
}

export class BinarySearchTree<T extends number> {
  private root: TreeNode<T> | null = null;

  insert(value: T): void {
    if (this.root === null) {
      this.root = { value, left: null, right: null };
    } else {
      this.insertNode(this.root, value);
    }
  }

  private insertNode(node: TreeNode<T>, value: T): void {
    if (value < node.value) {
      if (node.left === null) {
        node.left = { value, left: null, right: null };
      } else {
        this.insertNode(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = { value, left: null, right: null };
      } else {
        this.insertNode(node.right, value);
      }
    }
  }

  search(value: T): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode<T> | null, value: T): boolean {
    if (node === null) return false;

    if (value === node.value) return true;
    if (value < node.value) return this.searchNode(node.left, value);
    return this.searchNode(node.right, value);
  }

  // Implement more methods: delete, traverse, etc.
}
```

2. **Export from** `src/data-structures/index.ts`:

```typescript
export { BinarySearchTree } from './BinarySearchTree';
```

3. **Create tests** `src/__tests__/BinarySearchTree.test.ts`:

```typescript
import { BinarySearchTree } from '../data-structures/BinarySearchTree';

describe('BinarySearchTree', () => {
  let bst: BinarySearchTree<number>;

  beforeEach(() => {
    bst = new BinarySearchTree<number>();
  });

  test('insert and search', () => {
    bst.insert(50);
    bst.insert(30);
    bst.insert(70);

    expect(bst.search(30)).toBe(true);
    expect(bst.search(100)).toBe(false);
  });
});
```

4. **Run tests**:

```bash
npm test
```

## Adding a New Algorithm

### Example: Fibonacci (Dynamic Programming)

1. **Create the file** `src/algorithms/DynamicProgramming.ts`:

```typescript
/**
 * Fibonacci using Dynamic Programming
 * Time: O(n), Space: O(n)
 */
export function fibonacciDP(n: number): number {
  if (n <= 1) return n;

  const dp: number[] = [0, 1];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

/**
 * Fibonacci with space optimization
 * Time: O(n), Space: O(1)
 */
export function fibonacciOptimized(n: number): number {
  if (n <= 1) return n;

  let prev = 0,
    curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}
```

2. **Export from** `src/algorithms/index.ts`:

```typescript
export { fibonacciDP, fibonacciOptimized } from './DynamicProgramming';
```

3. **Create tests** `src/__tests__/DynamicProgramming.test.ts`:

```typescript
import { fibonacciDP, fibonacciOptimized } from '../algorithms/DynamicProgramming';

describe('Dynamic Programming', () => {
  test('fibonacci calculates correctly', () => {
    expect(fibonacciDP(10)).toBe(55);
    expect(fibonacciOptimized(10)).toBe(55);
  });
});
```

## Code Standards

### TypeScript Guidelines

- Always use `export` for public APIs
- Add JSDoc comments for complex functions
- Use generic types `<T>` for reusable data structures
- Set proper return types
- Use `strict: true` in tsconfig.json

### Testing Guidelines

- Write tests for edge cases
- Test happy path and error scenarios
- Use descriptive test names
- Aim for >80% code coverage

### Performance Considerations

- Add Big O complexity comments
- Consider space/time tradeoffs
- Benchmark with large datasets
- Profile with Node.js profiler

## Project Structure Best Practices

```
src/
├── data-structures/     # Generic, reusable DS implementations
├── algorithms/          # Algorithm implementations
├── __tests__/          # Corresponding test files
├── types.ts            # Common type definitions
└── index.ts            # Demo/entry point
```

## Useful NPM Commands

```bash
npm run build          # Compile TypeScript
npm run dev            # Run with ts-node
npm test               # Run all tests
npm run test:watch     # Watch mode
npm run lint           # ESLint check
```

## Debugging Tips

1. **Add console.log statements**:

```typescript
console.log('Array:', array); // Easy debugging
```

2. **Use debugger**:

```typescript
debugger; // VSCode will pause here
```

3. **Run tests individually**:

```bash
npm test -- --testNamePattern="Stack"
```

## Resources

- [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [LeetCode](https://leetcode.com/) - Practice problems
- [Visualgo](https://visualgo.net/) - Algorithm visualization

## Performance Improvement Ideas

- [ ] Add Binary Search Tree
- [ ] Add Hash Map/Hash Table
- [ ] Add Graph (Adjacency List)
- [ ] Add Heap implementation
- [ ] Add BFS/DFS implementations
- [ ] Add dynamic array implementation
- [ ] Add Trie for string problems
- [ ] Add graph algorithms (Dijkstra, Floyd-Warshall)
