/**
 * Singly Linked List data structure
 */
export class LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class LinkedList<T> {
  private head: LinkedListNode<T> | null = null;
  private tail: LinkedListNode<T> | null = null;
  private size = 0;

  /**
   * Add element at the end of the list
   */
  append(data: T): void {
    const newNode = new LinkedListNode(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
      }
      this.tail = newNode;
    }
    this.size++;
  }

  /**
   * Add element at the beginning of the list
   */
  prepend(data: T): void {
    const newNode = new LinkedListNode(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  /**
   * Remove element at the specified index
   */
  removeAt(index: number): T | null {
    if (index < 0 || index >= this.size || this.head === null) {
      return null;
    }

    let current: LinkedListNode<T> = this.head;
    if (index === 0) {
      this.head = current.next;
      if (this.size === 1) {
        this.tail = null;
      }
    } else {
      let previous: LinkedListNode<T> = current;
      let count = 0;
      while (count < index) {
        previous = current;
        current = current.next as LinkedListNode<T>;
        count++;
      }
      previous.next = current.next;
      if (index === this.size - 1) {
        this.tail = previous;
      }
    }
    this.size--;
    return current.data;
  }

  /**
   * Get element at the specified index
   */
  getAt(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let current = this.head as LinkedListNode<T>;
    let count = 0;
    while (count < index) {
      current = current.next as LinkedListNode<T>;
      count++;
    }
    return current.data;
  }

  /**
   * Get the size of the linked list
   */
  getSize(): number {
    return this.size;
  }

  /**
   * Clear the linked list
   */
  clear(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * Print the linked list
   */
  print(): void {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' -> ';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}
