class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function enqueue(value, queue){
    const node = new Node(value);
     if(queue.isEmpty()){
        queue.head = node;
        queue.tail = node;  
     }else {
        queue.tail.next = node;
        queue.tail = node;
     }
     queue.size++; 
     return queue.size;
}
function deQueue(queue){
    if(queue.isEmpty()){
        return null;
    }
    const deNode = queue.head;
    if(queue.head === queue.tail){
        queue.head = null;
        queue.tail = null;
        queue.size = 0;
        return deNode.value;
    }
    queue.head = deNode.next;
    deNode.next=null;
    return deNode.value;
}
function display(queue){
    let temp = queue.head;
    if(queue.isEmpty()){
        console.log("Empty Queue ");
        return null;
    }
    while(temp){
        console.log(temp.value);
        temp=temp.next;
    }
}

const queue = new Queue();
enqueue(9,queue);
enqueue(19,queue);
enqueue(29,queue);
display(queue);
console.log(" ");
enqueue(39,queue);
display(queue);
console.log(" ");
console.log(deQueue(queue));
console.log(" ");
display(queue);