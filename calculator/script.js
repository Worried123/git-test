let num1 ='' ;
let num2 = '';
let operator;

const show =document.querySelector('.screen');
const numbers = document.querySelectorAll('.numbers')
const equal = document.querySelector('.equal')
const operat = document.querySelectorAll('.operators')
const reset = document.querySelector('.ac')
const percentage = document.querySelector('.tohundred')
const negative =  document.querySelector('.negative')
const answer = document.querySelector('.answer')
numbers.forEach(number=>{
number.addEventListener('click', e=>{
  show.textContent += number.textContent
  if (!operator) {
    num1 += number.textContent
    console.log(num1);
    
  }else{
    
    num2 += number.textContent
    console.log(num2);
    num1 =operate(+num1,operator,+num2)
   
        }
  answer.textContent = num1
  })
})
 equal.addEventListener('click', e=> {
})
operat.forEach(allOprats =>{
  allOprats.addEventListener('click', e=>{
    if (!(!operator)) {
      show.value =  num1
      num2 = ''
    }
    operator = allOprats.textContent
   show.textContent = operator

  })
})
reset.addEventListener('click', e=>{
 show.textContent=''
 num1 = ''
 num2 = ''
 operator = ''
 answer.textContent = ''
})
percentage.addEventListener('click' , e=>{
show.textContent = num1/100
})
negative.addEventListener('click' , e => {
num1 = -num1
show.textContent = num1
})
equal.addEventListener('click' , e => {
  show.textContent =  num1
  num2 = ''
console.log(num1);
})
function add(a,b) {
  return a+b
  }
  function sub(a,b) {
      return a-b
  }
  function multiply(a,b) {
      return a*b
  }
  function devide(a,b) {
      return a/b
  }
  function operate(num1,operator,num2) {
      if (operator === '+') {
      return add(num1,num2)    
      }
      else if (operator === '-') {
         return sub(num1,num2)    
          }
          else if (operator === '*') {
            return  multiply(num1,num2)    
              }
              else if (operator === '/') {
              if(num1 === 0 || num2 === 0){
                num1 = ''
                num2 = ''
                show.textContent = 'eror'
              }else{
                return  devide(num1,num2)    
              }}
  }
//write a code that when a button is pressed it show it on scereen
//write a code that does the same thing for operators
//add the data of pressed button to a arraay
//cut the array in half when the operator is pressed
