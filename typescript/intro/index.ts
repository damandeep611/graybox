function greetsName(user: string){
  return(
    console.log(`heylo buddy what'cha doing ${user}`)
  )
 
}
console.log(greetsName('dev daman'))

// sum function 
function sumAdd(a:number, b: number){
  return(
    console.log(a + b)
  )
}

console.log(sumAdd(40, 20))


//fn that takes another funciton as arugment 
function runFunction(fn: ()=> void){
  setTimeout(fn, 1000)
}

let isThisWorking =  runFunction(function(){
  console.log('ehy uhalso ')
})

console.log(isThisWorking)
