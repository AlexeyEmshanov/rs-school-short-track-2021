const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    // this.queue = new ListNode()
    this.data = [];
    this.next = 0;
  }

  get size() {
    this.scale = this.data.length;
    return this.scale;
  }

  enqueue(element) {
    this.data[this.next] = element;
    this.next += 1;
  }

  dequeue() {
    this.next -= 1;
    return this.data.shift();
  }
}

module.exports = Queue;
