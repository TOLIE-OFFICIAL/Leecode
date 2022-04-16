//链表节点类
class linkNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// 链表类
class linkList {
    constructor(head = null) {
        this.head = head;
    }
}

let node1 = new linkNode(2);
let nodeList = new linkList(node1);
console.log(node1);
console.log(nodeList);