//1.Finding the Intersection in tow array
let arr1 = [1, 22, 11, 42, 54, 13];
let arr2 = [2, 22, 12, 27, 34, 42];
let arri = [];

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            arri.push(arr1[i]);
            break;
        }
    }
}

console.log(arri);

//2.find the differnt between two arrays
const array1 = [11, 25, 32, 49, 56];
const array2 = [32, 43, 56, 62, 70];
const diff = array1.filter((x) => !array2.includes(x));
console.log(diff); 

// 3.array intersection of two set

const arr3 = [1, 2, 3];
const arr4 = [2, 3, 4, 5];
const farray = arr3.filter(value => arr4.includes(value));
console.log(farray)

//4.grouping array element

const arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const group= arr.reduce((acc, cur) => {
    if (!acc[cur]) {
        acc[cur] = [];
    }
    acc[cur].push(cur);
    return acc;}, {});
console.log(group);

//5.array manipulation with slice()

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11];
arr.splice(3, 4); 
console.log(arr5);

