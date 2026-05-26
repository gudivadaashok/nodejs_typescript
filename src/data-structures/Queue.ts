/**
 * Queue - FIFO (First In First Out) data structure
 */
export class Queue<T> {
  private items: T[] = [];

  /**
   * Add an element to the back of the queue
   */
  enqueue(element: T): void {
    this.items.push(element);
  }

  /**
   * Remove and return the front element from the queue
   */
  dequeue(): T | undefined {
    return this.items.shift();
  }

  /**
   * View the front element without removing it
   */
  front(): T | undefined {
    return this.items[0];
  }

  /**
   * Check if the queue is empty
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Get the size of the queue
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Clear the queue
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Print the queue elements
   */
  print(): void {
    console.log(this.items.toString());
  }
}
