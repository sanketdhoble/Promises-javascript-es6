//Object binding & Scope:
// Example-1

let codechef = {
  code: function(){
    console.log(this.type)
  },
  type:"Recursion"
}
let hackerearth=codechef.code; //codechef object only gives the function with the 'this' instance
console.log(hackerearth())  //Prints undefined

//Solution is to bind the instance of codechef:
let hackerearth=codechef.code.bind(codechef)
console.log(hackerearth())  //Prints Recursion


// Example-2
let globalCode = function (){
  console.log(this.type)
}
let codechef = {
  code: globalCode,
  type:"Recursion"
}
console.log(codechef.code); //Prints Recursion

//Example-3

let globalCode = function (){
  console.log(this.type)
}
let codechef = {
  code: globalCode,
  type:"Recursion"
}
let hackerearth={
  code:codechef.code,
  type:"Dynamic Programming"
}
console.log(hackerearth.code); //Prints Dynamic Programming
