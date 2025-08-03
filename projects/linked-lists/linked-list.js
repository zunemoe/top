class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;        
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    size() {
        return this.length;
    }

    // head {
    //     return this.head;
    // }

    // tail {
    //     return this.tail;
    // }

    at(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    pop() {
        if (!this.head) {
            return null;
        }
        if (this.length === 1) {
            const removedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return removedNode;
        }
        let current = this.head;
        while (current.next && current.next.next) {
            current = current.next;         
        }
        const removedNode = current.next;
        current.next = null;
        this.tail = current;
        this.length--;
        return removedNode;
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;            
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1; // Not found
    }

    toString() {
        let current = this.head;
        let result = '';
        while (current) {
            result += `(${current.value}) -> `;
            current = current.next;
        }
        result += 'null';
        return result;
    }

    insertAt(value, index) {
        let newNode = new Node(value);
        if (index < 0 || index > this.length) {
            return null; // Invalid index
        }
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            if (this.length === 0) {
                this.tail = newNode; // If list was empty, set tail
            }
        } else if (index === this.length) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;                                            
            }
            newNode.next = current.next;
            current.next = newNode;                        
        }
        this.length++;
        return this;
    }

    removeAt(index) {
        let current = this.head;
        if (index < 0 || index >= this.length) {
            return null; // Invalid index
        }
        if (index === 0) {
            this.head = current.next;
            if (this.length === 1) this.tail = null; // If it was the only node, clear tail
            current = null; // Clear the removed node    
        } else {
            for (let i = 0; i < index - 1; i++) {
                current = current.next;                
            }
            let removedNode = current.next;
            current.next = removedNode.next;
            if (removedNode === this.tail) this.tail = current; // If it was the tail, update tail
            removedNode = null; // Clear the removed node
            this.length--;
        }
        return this;
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.prepend("fish");

console.log("Whole List: ", list.toString());
console.log("List size: ", list.size());
console.log("List head: ", list.head);
console.log("List tail: ", list.tail);
console.log("List contains cat?: ", list.contains("cat"));
console.log("Node at index 2: ", list.at(2));
console.log("List containes turtle?: ", list.contains("turtle"));
console.log("Pop last node turtle: ", list.pop());
console.log("List contains turtle after pop?: ", list.contains("turtle"));
console.log("Find node with value 'snake': ", list.find("snake"));
console.log("List before inserting 'rabbit': ", list.toString());
console.log("Insert 'rabbit' at index 2: ", list.insertAt("rabbit", 2));
console.log("List after inserting 'rabbit' at index 2: ", list.toString());
console.log("Remove node at index 3: ", list.removeAt(3));
console.log("List after removing node at index 3: ", list.toString());