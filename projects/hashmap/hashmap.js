class HashMap {
    constructor(bucketSize = 16) {
        this.buckets = new Array(bucketSize).fill(null).map(() => []);
        this.size = 0;        
    }

    hash(key) {
        let hash = 0;
        const primeNumber = 31; // A prime number to reduce collisionsfor
        for (let i = 0; i < key.length; i++) {
            hash = hash * primeNumber + key.charCodeAt(i);
            hash = hash % this.buckets.length; // Modulo to keep the hash within a reasonable range
        }

        return hash;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update existing key
                return this;
            }            
        }
        bucket.push([key, value]); // Add new key-value pair
        this.size++;
        return this;
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {                
                return bucket[i][1]; // Return the value if key is found
            }            
        }
        return null; // Return null if key is not found
    }

    has(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return true; // Return true if key is found
            }
        }
        return false; // Return false if key is not found
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove the key-value pair
                this.size--;
                return true; // Return true if key was found and removed
            }
        }
        return false; // Return false if key was not found
    }

    length() {
        return this.size; // Return the number of key-value pairs in the hashmap
    }

    clear() {
        this.buckets = new Array(this.buckets.length).fill(null).map(() => []);
        this.size = 0; // Reset the size to 0
    }

    keys() {
        const keys = [];
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                keys.push(pair[0]); // Collect keys from each bucket
            }
        }
        return keys; // Return an array of all keys in the hashmap
    }

    values() {
        const values = [];
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                values.push(pair[1]); // Collect values from each bucket
            }
        }
        return values; // Return an array of all values in the hashmap
    }

    entries() {
        const entries = [];
        for (const bucket of this.buckets) {
            for (const pair of bucket) {
                entries.push([pair[0], pair[1]]);
            }
        }
        return entries; // Return an array of all key-value pairs in the hashmap
    }
}

const test = new HashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.get('apple')); // Output: 'red'
console.log(test.get('banana')); // Output: 'yellow'
console.log("HashMap size: ", test.length()); // Output: 12
console.log("HashMap keys: ", test.keys());
console.log("HashMap values: ", test.values());
console.log("HashMap entries: ", test.entries());
console.log("HashMap has 'dog': ", test.has('dog')); // Output: true
console.log("HashMap has 'zebra': ", test.has('zebra')); // Output: false
test.remove('elephant');
console.log("HashMap after removing 'elephant': ", test.entries());
test.clear();
console.log("HashMap after clearing: ", test.entries()); // Should be empty
console.log("HashMap size after clearing: ", test.length()); // Should be 0