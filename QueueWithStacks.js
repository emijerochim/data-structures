function MyQueue() {
  const stack1 = [],
    stack2 = [];
  return {
    enqueue: (val) => stack1.push(val),
    dequeue: () => {
      if (!stack2.length) {
        while (stack1.length) stack2.push(stack1.pop());
      }
      return stack2.pop();
    },
    peek: () => (stack2.length ? stack2[stack2.length - 1] : stack1[0]),
    empty: () => !stack1.length && !stack2.length,
  };
}

//tests
const myQueue = MyQueue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.dequeue());

module.exports = MyQueue;
