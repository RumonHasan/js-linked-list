class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null; // default value as null
        this.size = 0;
    }

    // insert first node
    insertFirstNode(data){
        this.head = new Node(data, this.head); // inserts the data value and defaults head to null
        this.size++;
    }

    //insert the last node
    insertLast (data){
        let node = new Node(data);
        let current;

        // if make it head then it is last
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;

            while(current.next){
                current = current.next;
            }
            // current next is empty then inserts the node
            current.next = node;
        }
        this.size += 1;
    }

    // insert anywhere in between based on the index
    insertAt(data, index){
        // out of range index
        if(index > 0 && index > this.size){
            return;
        }

    }

    // get at index

    // remove at index

    // clear list

    // print the list data
    printData (){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();

linkedList.insertFirstNode(100);
linkedList.insertFirstNode(200);
linkedList.insertFirstNode(300);
linkedList.insertLast(400);

linkedList.printData();