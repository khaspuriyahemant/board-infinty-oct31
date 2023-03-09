// loops and scope in js    

//loop

//type of loops (while loop and for loop)

//while loop
//print the number from 1-10

/*let i = 1

while (i <= 105) {


  console.log(i)
 i++
 i = i + 1


}*/


/*i = 5
while (i > 0) {

console.log(i)
//i = i - 1
i--
}*/

 

/*i = 5
// if the loop body has single statament you can skip the curly brackets 
//while(i != 0)
while (i)console.log(i--)*/



// do  while 
// do while differnce betwewn while (do while loop frist run the code after that check condition)
//while(while first check the condition after run )


//example (do while )

/*
let i = 0 ;
do {
  console.log('the value of i',i)
  i++

}while (i > 5)

let x = 0;

while(x > 0){

console.log('the value of x',x)
i++ 
}

*/


// for loop


/*
for(begin;conditions;step;){


}

for(let i = 0; i < 5; i = i + 1){

  console.log(i);


}


// skip some  parts of the  for loop


let i = 0;

for(; i < 5; i = i + 1) {//no need to begin
   console.log(i)

}


// break the loop



let value = 1
let sum = 0

while(value = 5){

  //if (sum == 6){

  //breal
 // }

 sum = sum + value

 value++

}
console.log(sum)
*/

//continue lighter version


for (let i = 0; i < 10; i++){

if(i % 2 == 0){
  continue //skipping the loop
}
console.log(i)

}
















































