// function Book(title, author, numberOfPages, isRead) {
//     if (!new.target) {
//         throw new Error("Book constructor must be called with 'new'");
//     }
//     this.title = title;
//     this.author = author;
//     this.numberOfPages = numberOfPages;
//     this.isRead = isRead;
//     this.info = () => {
//         return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.isRead ? 'read' : 'not read yet'}`;
//     }
//     console.log(this.prototype);
// }

// Algo
// Merge Sort
// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
//     if (arr.length > 1) {
//         const half = Math.floor(arr.length / 2);
//         const left = mergeSort(arr.slice(0, half));
//         const right = mergeSort(arr.slice(half));

//         let merged = [];

//         while (left.length > 0 && right.length > 0) {
//             if (left[0] <= right[0]) merged.push(left.shift());
//             else merged.push(right.shift());
//         }

//         return [...merged, ...left, ...right];
//     }   
// }

// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 5, 3, 100]));

function multipleOfThreeOrFive(n) {
    let sum = 0;
    if (n <= 0) return sum;
    else {
        if (n % 3 === 0 || n % 5 === 0) sum += n;
        return sum + multipleOfThreeOrFive(n - 1);
    }
}

console.log(multipleOfThreeOrFive(999)); // 23 (3 + 5 + 6 + 9 + 10))

function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}