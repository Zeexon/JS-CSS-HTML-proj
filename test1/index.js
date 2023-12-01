let form = document.querySelector('#main-form')
let btn = document.querySelector('#btn')
let emailInput = document.querySelector('#emailAddressInput')
let phoneNumberInput = document.querySelector('#phoneNumberInput')
let phoneNumInputDiv = document.querySelector('.phoneNumInputDiv')
let nameInput = document.querySelector('#nameInput')
let textArea = document.querySelector('#textArea')
let errorMessageEmail = document.querySelector('.error-message-email')
let errorMessageName = document.querySelector('.error-message-name')
let errorMessageNumber = document.querySelector('.error-message-number')






phoneNumberInput.addEventListener('click',function hintCreation(){
    phoneNumberInput.value = `+7 () --`
    phoneNumberHintSpan = `<span class="phone-number-example">Например: +7 (999) 000-00-00</span>`
    phoneNumInputDiv.insertAdjacentHTML('beforeend',phoneNumberHintSpan)
    setTimeout(()=>{document.querySelector('.phone-number-example').remove()},20000)
    
},{once:true})


function validateName(){
    if(!nameInput.value.match(/^[A-Za-z]{2,20}$/)){
        errorMessageName.innerHTML = 'Введите свое настоящее имя'
        nameInput.style.borderColor = 'red'
        nameInput.classList.add('invalid')
    }
    if(nameInput.value.match(/^[A-Za-z]{2,20}$/)){
        errorMessageName.innerHTML = ''
        nameInput.style.borderColor = 'green'
        nameInput.classList.remove('invalid')
    }
}
function validateEmail(){
    if(!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorMessageEmail.innerHTML = 'Введите действительный Email-адрес'
        emailInput.style.borderColor = 'red'
        emailInput.classList.add('invalid')
    }
    if(emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorMessageEmail.innerHTML = ''
        emailInput.style.borderColor = 'green'
        emailInput.classList.remove('invalid')
    }
}

function validateNumber(){
    if(!phoneNumberInput.value.match(/^[+]\d{1}\s[(]\d{3}[)]\s\d{3}[-]\d{2}[-]\d{2}$/)){
        errorMessageNumber.innerHTML = 'Введите действительный номер телефона'
        phoneNumberInput.style.borderColor = 'red'
        phoneNumberInput.classList.add('invalid')
        
    }
    if(phoneNumberInput.value.match(/^[+]\d{1}\s[(]\d{3}[)]\s\d{3}[-]\d{2}[-]\d{2}$/)){
        errorMessageNumber.innerHTML = ''
        phoneNumberInput.style.borderColor = 'green'
        phoneNumberInput.classList.remove('invalid')
        
    }
}


const requestURL = 'https://jsonplaceholder.typicode.com/posts'



form.addEventListener('submit',function(e){

    const body = {
        name: nameInput.value,
        phoneNum: phoneNumberInput.value,
        email: emailInput.value,
        message: textArea.value
    
    }

    e.preventDefault();
    const headers = {'Content-Type': 'application/json'}

    fetch(requestURL,{
        method: 'post',
        body: JSON.stringify(body),
        headers: headers
    }).then(function(res){
        return res.json()
    }).then(function (text){
        console.log(JSON.stringify(text))
    }).catch(function (error){
        console.error(error)
    })
})