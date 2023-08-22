var sum: number = 10;
var list: number[] = [];
for (let i = 1; i < 100; i++) {
  if (i % 2 != 0) {
    sum = sum + i;
    list.push(i);
  }
}
console.log("sum", sum, list);





var sum: number = 1;
var list: number[] = [];
for (let i = 1; i < 100; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
    list.push(i);
  }
}
console.log("sum", sum, list);




// 3 - Write a program that uses a while loop to print the first 25 integers.

var i: number = 1;
while (i <= 25) {
  console.log(i);
  i++;
}

// 4 - Write a program that uses a while loop to print the first 10 even numbers.
var i: number = 1;
while (i<=20) {
 if(i%2==0){
  console.log(i);
  
 }
 i++
  
}
