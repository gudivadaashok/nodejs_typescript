# Quick Start Guide

## 1. Install Dependencies

```bash
npm install
```

## 2. Run the Demo

```bash
npm run dev
```

This will run `src/index.ts` which demonstrates all data structures and algorithms.

## 3. Run Tests

```bash
npm test
```

## 4. Build for Production

```bash
npm run build
```

The compiled JavaScript will be in the `dist/` folder.

## 5. Development Loop

```bash
npm run test:watch
```

This runs tests in watch mode - automatically reruns when files change.

## Project Tips

1. **Adding New Implementations**: Create files in `src/data-structures/` or `src/algorithms/`
2. **Writing Tests**: Add `.test.ts` files in `src/__tests__/`
3. **Code Quality**: ESLint runs on save (if using VSCode with settings configured)
4. **Type Safety**: All files use strict TypeScript settings

## Common Tasks

### Create a New Data Structure

1. Create file: `src/data-structures/MyStructure.ts`
2. Implement the class with TypeScript
3. Export it from index.ts if needed
4. Write tests in `src/__tests__/MyStructure.test.ts`

### Create a New Algorithm

1. Create file: `src/algorithms/MyAlgorithm.ts`
2. Export functions with proper type signatures
3. Write tests in `src/__tests__/MyAlgorithm.test.ts`
4. Run `npm test` to verify

## Debugging

### Debug in VSCode

1. Set breakpoints in your code
2. Open Run and Debug (Ctrl+Shift+D or Cmd+Shift+D)
3. Select "Node" configuration
4. Press F5 to start debugging

### Debug with console.log

Use `console.log()` statements and run:

```bash
npm run dev
```

## Next Steps

- Implement more data structures (BST, Heap, Graph)
- Add more algorithms (DFS, BFS, Dijkstra)
- Write complexity analysis comments
- Benchmark different algorithms
