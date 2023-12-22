import './style.css';

const form = document.querySelector("#registerForm")
const email = document.querySelector("#email")
const country = document.querySelector("#country")
const zipCode = document.querySelector("#zipCode")
const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirmPassword")
const submitBtn = document.querySelector("button")

const inputForms = [form, email, country, zipCode, password, confirmPassword]

const validMessage = document.createElement("div")
validMessage.id = "message"

function checkValid(element) {
    if (!element.checkValidity()) {
        validMessage.innerHTML = element.validationMessage
        form.appendChild(validMessage)
    }else{
        form.removeChild(validMessage)
    }
    if (element.type == "password" || element.type == "confirmPassword" && password.value != confirmPassword.value) {
        validMessage.innerHTML = "Password doesn't match"
        form.appendChild(validMessage)
    }else{
        form.removeChild(validMessage)
    }
}

inputForms.forEach(element => {
    element.addEventListener("focusout", (e)=>{
        checkValid(e.originalTarget)
    })
});