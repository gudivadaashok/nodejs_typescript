# DSA Practice - Node.js + TypeScript

A comprehensive Data Structures and Algorithms learning project built with Node.js and TypeScript.

## 📁 Project Structure

```
src/
├── data-structures/    # Data structure implementations
│   ├── Stack.ts
│   ├── Queue.ts
│   └── LinkedList.ts
├── algorithms/         # Algorithm implementations
│   ├── Sorting.ts
│   └── Searching.ts
├── __tests__/          # Test files
│   ├── Stack.test.ts
│   └── Algorithms.test.ts
├── utils/              # Utility functions
└── index.ts            # Main entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd nodejs_typescript
```

2. Install dependencies:
```bash
npm install
```

## 📝 Available Scripts

- **`npm run build`** - Compile TypeScript to JavaScript
- **`npm run dev`** - Run with ts-node (development)
- **`npm start`** - Run compiled JavaScript
- **`npm test`** - Run all tests with Jest
- **`npm run test:watch`** - Run tests in watch mode
- **`npm run lint`** - Run ESLint

## 📚 Data Structures Included

- **Stack** - LIFO data structure with push, pop, peek operations
- **Queue** - FIFO data structure with enqueue, dequeue operations
- **LinkedList** - Singly linked list with append, prepend, and removeAt operations

## 🔍 Algorithms Included

### Sorting Algorithms
- Bubble Sort - O(n²)
- Merge Sort - O(n log n)
- Quick Sort - O(n log n) average

### Searching Algorithms
- Linear Search - O(n)
- Binary Search - O(log n)

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run with coverage
npm test -- --coverage
```

## 📖 Usage Example

```typescript
import { Stack } from './data-structures/Stack';
import { mergeSort } from './algorithms/Sorting';

// Using Stack
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2

// Using Merge Sort
const sorted = mergeSort([64, 34, 25, 12, 22]);
console.log(sorted); // [12, 22, 25, 34, 64]
```

## 🛠️ Development Setup

### VSCode Extensions (Recommended)
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter
- ESLint
- Thunder Client (for API testing)

### VSCode Settings
The project uses strict TypeScript settings for better type safety and code quality.

## 📌 Next Steps

Extend the project with:
- [ ] Binary Search Tree
- [ ] Hash Table
- [ ] Graph implementations
- [ ] Dynamic Programming examples
- [ ] More sorting algorithms (Insertion, Selection, Heap)
- [ ] Pathfinding algorithms (BFS, DFS, Dijkstra)

## 📄 License

MIT

## 💡 Learning Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Big O Complexity](https://www.bigocheatsheet.com/)
- [LeetCode DSA Problems](https://leetcode.com/)