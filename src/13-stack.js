/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(element) {
    this.data[this.top] = element;
    this.top += 1;
  }

  pop() {
    let popResult;
    if (this.data.length !== 0) {
      this.top -= 1;
      popResult = this.data.pop();
    }
    return popResult;
  }

  peek() {
    return this.data[this.top - 1];
  }
}

module.exports = Stack;
