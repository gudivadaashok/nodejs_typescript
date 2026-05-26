/**
 * Stack - LIFO (Last In First Out) data structure
 */
export class Stack<T> {
  private items: T[] = [];

  /**
   * Add an element to the top of the stack
   */
  push(element: T): void {
    this.items.push(element);
  }

  /**
   * Remove and return the top element from the stack
   */
  pop(): T | undefined {
    return this.items.pop();
  }

  /**
   * View the top element without removing it
   */
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  /**
   * Check if the stack is empty
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Get the size of the stack
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Clear the stack
   */
  clear(): void {
    this.items = [];
  }

  /**
   * Print the stack elements
   */
  print(): void {
    console.log(this.items.toString());
  }
}
