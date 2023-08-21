const pass = document.querySelector('.pass')
const passfirm = document.querySelector('.pass-confirm')
const green = document.querySelector('.eight')
const num = document.querySelector('.num')
const submit = document.querySelector('.submit')
const something = document.querySelector('.fn')
pass.addEventListener('input',e=>{
    console.log(pass.value);
    if (!pass.validity.tooShort) {

       green.style.color = 'green'
    }else{
        pass.style.border = '1px gray solid'
    }

})
passfirm.addEventListener('input',e=>{
    if (pass.value === passfirm.value) {
        const something = document.querySelector('.fn')
        something.textContent = 'passwords match'
        something.style.color = 'green'
    }else{
        something.textContent = 'passwords do not match'
        something.style.color= 'red'
        passfirm.style.border = '1px gray solid'
    }
})

submit.addEventListener('click', (e)=>{
if (pass.value === passfirm.value && !(pass.validity.tooShort)) {
    
}else{
    e.preventDefault()

}
})
