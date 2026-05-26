import { Stack } from './data-structures/Stack';
import { Queue } from './data-structures/Queue';
import { LinkedList } from './data-structures/LinkedList';
import { bubbleSort, mergeSort, quickSort } from './algorithms/Sorting';
import { linearSearch, binarySearch } from './algorithms/Searching';

console.log('=== Data Structures & Algorithms Practice ===\n');

// Stack Example
console.log('--- Stack Example ---');
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Stack after pushing 1, 2, 3:');
stack.print();
console.log('Popped:', stack.pop());
stack.print();

// Queue Example
console.log('\n--- Queue Example ---');
const queue = new Queue<string>();
queue.enqueue('First');
queue.enqueue('Second');
queue.enqueue('Third');
console.log('Queue after enqueueing First, Second, Third:');
queue.print();
console.log('Dequeued:', queue.dequeue());
queue.print();

// LinkedList Example
console.log('\n--- LinkedList Example ---');
const linkedList = new LinkedList<number>();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
console.log('LinkedList after appending 10, 20, 30:');
linkedList.print();

// Sorting Example
console.log('\n--- Sorting Algorithms ---');
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array:', unsortedArray);
console.log('Bubble Sort:', bubbleSort(unsortedArray));
console.log('Merge Sort:', mergeSort(unsortedArray));
console.log('Quick Sort:', quickSort(unsortedArray));

// Searching Example
console.log('\n--- Searching Algorithms ---');
const sortedArray = [11, 12, 22, 25, 34, 64, 90];
const searchTarget = 25;
console.log('Sorted array:', sortedArray);
console.log(`Linear Search for ${searchTarget}:`, linearSearch(sortedArray, searchTarget));
console.log(`Binary Search for ${searchTarget}:`, binarySearch(sortedArray, searchTarget));

console.log('\n✅ DSA Project Setup Complete!');
