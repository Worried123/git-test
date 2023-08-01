const range = document.querySelector('.range');
const color = document.getElementById("color");
const pallet = document.querySelector('.pallet');
const input = document.querySelector('.input');
const number = document.querySelector('.number');
const rowdivs = document.createElement('div');
///const border = document.querySelector('.border')
function resetAndNumber(params) {
  pallet.textContent = ''
  number.textContent = `grid ${range.value}x${range.value}`
  
}
range.addEventListener('input', e=>{
resetAndNumber()
   for(let i = 0 ; i < range.value ; ++i) {
    const rowdivs = document.createElement('div')
    rowdivs.setAttribute('class' , 'rowdivs')
    pallet.append(rowdivs)
    }
    let rowdiv = document.querySelectorAll('.rowdivs');
    rowdiv.forEach(e => {for(let i = 0 ; i < range.value ; ++i){
      const collumndiv = document.createElement('div')
      collumndiv.setAttribute('class', 'collumndiv');
      e.append(collumndiv)
      collumndiv.addEventListener('mouseover', e=>{
      collumndiv.style.backgroundColor = color.value
      const clear = document.querySelector('.clear')
clear.addEventListener('click' , e => {
collumndiv.style.backgroundColor = 'whitesmoke'
})
 })
 /*border.addEventListener('click', e=>{
  collumndiv.style.border = 'none'*/

}})
})
// border event listener crashes the thing
const reset = document.querySelector('.reset')
reset.addEventListener('click', e => {
pallet.textContent=''
range.value = 0
number.textContent = `grid ${range.value = 0}x${range.value = 0}`
})