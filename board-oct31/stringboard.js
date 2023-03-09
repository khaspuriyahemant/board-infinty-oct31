//string => sequence of characters, text from
//properties and methods


//creating a string
//const string1 = 'Hello'
//const string2 = 'world'

//concatenating the strings
//console.log(string1 + " " + string2)
//console.log(`${string1} ${string2}`)

//  2 way => string constructor

//const string3 = new String('A string')
//console.log(string3)

//strings are of primitive data types
//they are passed by value 
let string = 'hello'

//let string2 = string

//console.log(string === string2)

console.log(string.length)
    

//Accessing the elements

let str = 'hello'

//first charcter
//console.log(str[0])

//console.log(str.at(0))

//console.log(str.length)

//last element
//console.log(str[str.length-1])
//console.log(str.at(-1))

   
   
   // for of loop

//iterate over array or  string or object

//let str = 'javascript'

//for (let i = 0; i < str.length ; i++){

   // if(str[i] == 'v') continue
   // console.log(str[i])
//}



// for of loop 
f//or (let char of str){

   // if( char == 'v') continue

   // console.log(char)
//}




//strings are immuutable
 
//let str = 'abcd'

//str = 'h' + str [1] + str [2]
//str

//console.log(str.toUpperCase())
//console.log(str.toLowerCase())






//let str = 'javascript'
//slice
//str.slice(start, end) but not including end  

//console.log(str.slice(0,4))

//console.log(str.slice(3))  //if  no second argument it will go till last




//slice
//slice str.slice(start, end)

//let str = 'javascript'

//negative index is also allowed
    
//console.log(str.slice(-2))

//console.log(str.slice(-4 , -1))




//str.substr(start, length)
//let str = 'javascript'

//console.log(str.substr(2 , 6))


//console.log(str.substr(-2 , 1))




//str. substring (start , end) but not including end

//let str = 'javascript'


//console.log (str.substring(2 , 6))
//console.log (str.substring(6 , 2))  // is start value is greater then end value it just swaps or inter chnages

//console.log (str.slice(6 , 2))
//console.log (str.slice(2 , 6))





