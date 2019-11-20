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
        this.length = 0;
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
        this.length++;
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
        // console.log(node.data)
        this.length--;
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
    let result = [];
    if(this.length == 0) return result;
    let curr = queue.first;
    // console.log(queue.first.data)
    while (curr !== null) {
        result.push(curr.data)
        curr = curr.next;
    }
    return result;
}

module.exports = {
    Queue: Queue,
    display: display,
    isEmpty: isEmpty,
    peek: peek
}

