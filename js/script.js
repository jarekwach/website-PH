const loginMsg = document.querySelector('.login-msg')
const registerMsg = document.querySelector('.register-msg')
const loginForm = document.querySelector('.login-form')
const registerForm = document.querySelector('.register-form')
const navLoginLink = document.querySelector('.nav-login-link')

function changeForm() {
	loginForm.classList.toggle('disabled')
	registerForm.classList.toggle('disabled')
}

function showLoginForm() {
	loginForm.classList.remove('disabled')
	registerForm.classList.add('disabled')
}

loginMsg.addEventListener('click', changeForm)
registerMsg.addEventListener('click', changeForm)
navLoginLink.addEventListener('click', showLoginForm)
