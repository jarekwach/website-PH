const loginMsg = document.querySelector('.login-msg')
const registerMsg = document.querySelector('.register-msg')
const loginForm = document.querySelector('.login-form')
const registerForm = document.querySelector('.register-form')

function changeForm() {
	loginForm.classList.toggle('disabled')
	registerForm.classList.toggle('disabled')
}

loginMsg.addEventListener('click', changeForm)
registerMsg.addEventListener('click', changeForm)
