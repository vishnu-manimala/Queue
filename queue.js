// class Queue{
//     constructor(){
//         this.items = [];
//     } 
//     enqueue(value){
//         this.items.push(value);
//         return this.items.length;
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             console.log("Empty queue ...")
//             return undefined;
//         }
//         this.items.shift();
//         return 0;
//     }
//     peek(){
//         if(this.isEmpty()){
//             console.log("Empty queue ...")
//             return undefined;
//         }
//         return this.items[0];
//     }
//     isEmpty(){
//         return this.items.length === 0;
//     }
//     size(){
//         return this.items.length;
//     }
//     print(){
//         console.log(this.items.toString());
//     }
// }

// const queue = new Queue();
// console.log(queue.isEmpty());
// queue.enqueue(12);
// queue.enqueue(10);
// queue.print();
// queue.enqueue(9);
// queue.print();
// queue.dequeue();
// queue.print();
// console.log(queue.peek());
// queue.print();


//without in-built methods


class Queue{
    constructor(){
        this.items = [];
        this.size = 0;
    }

    isEmpty(){
        return this.items.length === 0;
    }
    enqueue(value){
        this.items[this.items.length] = value;
       
        return this.items.length;
    }
    dequeue(){
       // this.items[this.items.length-1] = null;
        this.items.length--;
        
        return this.items.length;
    }
    print(){
        console.log(this.items);
    }
    peek(){
        if(this.isEmpty()){
            console.log("Empty Queue");
            return -1;
        }
        console.log(this.items[0])
        return this.items[0];
    }
}
const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(12);
queue.enqueue(10);
queue.print();
queue.enqueue(9);
queue.print();
queue.dequeue();
queue.print();
queue.enqueue(2);
queue.print();
queue.peek();
