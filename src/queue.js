class _Node {
    constructor(data, next) {
      this.data = data;
      this.next = next;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
    }
  
    enqueue(data) {
      let node = new _Node(data, null);
      if (!this.first) {
        this.first = node;
      }
  
      if (this.last) {
        this.last.next = node;
      }
  
      this.last = node;
    }
  
    dequeue() {
      let node = this.first;
      if (node === null) {
        console.error('Queue is empty!');
        return;
      }
  
      this.first = node.next;
      if (node === this.last) {
        this.last = null;
      }
      console.log(node.data)
      return node.data;
    }
  }
  
  function peek(queue) {
    if (queue.first) {
      return queue.first.data;
    }
    return null;
  }
  
  function isEmpty(queue) {
    return queue.first === null;
  }
  
  function display(queue) {
    let result = '';
    let curr = queue.first;
    console.log(queue.first.data.name)
    while (curr !== null) {
      result += curr.data + ',';
      curr = curr.next;
    }
    return result;
  }
  
  function main() {
    let q = new Queue();
    q.enqueue({name: 'fluffy', age: 2});
    q.enqueue('Spock');
    q.enqueue('Uhura');
    q.enqueue('Sulu');
    q.enqueue('Checkov');
    q.dequeue();
    // q.dequeue();
    // console.log(JSON.stringify(q, null, 2));
    // console.log(JSON.stringify(peek(q), null, 2));
    console.log(display(q));
  }
  main();
