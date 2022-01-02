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

    // insert first node from top to bottom from the head of the list 
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
        // edge case for if the node is the first and there is no last
        if(index === 0){
            this.insertFirstNode(data);
            return;
        }
        //new node
        let node = new Node(data);
        let current, previous;
        let count = 0;

        current = this.head;// traversing from the first 

        while(count < index){ // checking upto the specified index
            previous = current;
            count++;
            current = current.next; //current becomes the equivalent of the specifies index
        }
        // inserting the node right in between
        node.next = current;
        previous.next = node;
        this.size++
    }

    // removing the last element
    removeLast(){
        let previous;
        let node;
        // reference points
        node = this.head.next;
        previous = this.head;

        // if there is only one head;
        if(!node){
            this.head = null;
            this.size -= 1;
            return;
        }

        while(node.next){
            previous = node;
            node = node.next;
        }
        // deleting the last node after the previous node becomes the second last one
        previous.next = null;
        this.size -= 1;
    }

    // removing the first element
    removeFirst(){
        let current;
        current = this.head;
        this.head = current.next;
        this.size = this.size - 1;
    }

    // get a specific value from an index 
    getAtIndex(index){
        let current;
        let count = 0;
        current = this.head;
        if(index > this.size){
            console.log('data is out of range');
            return;
        }
        while(current){ // looping until current value
            if(count === index){
                console.log('data at index',current.data);
            }
            count = count + 1;
            current = current.next; // switching to the next element
        }
    }

    // remove at index
    removeAtIndex(index){
        let count = 0;
        let current, prev;

        current = this.head;

        if(index > this.size){
            console.log('out of range');
            return;
        }
        if(index === 0){
            this.head = this.head.next; // setting the first elemnt to the next
            return;
        }

        while(count < index){
            count = count + 1;
            prev = current;
            current = current.next// current next adds up to the final element
        }
        prev.next = current.next;
    }

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
linkedList.insertAt(350,2);

linkedList.removeLast();

linkedList.getAtIndex(3);

linkedList.printData();