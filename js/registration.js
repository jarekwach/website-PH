const navLoginLink = document.querySelector('.nav-login-link')
const loginMsg = document.querySelector('.login-msg')
const registerMsg = document.querySelector('.register-msg')
const loginForm = document.querySelector('.login-form')
const registerForm = document.querySelector('.register-form')

const showLoginForm = () => {
	loginForm.classList.remove('disabled')
	registerForm.classList.add('disabled')
}
const urlParams = new URLSearchParams(window.location.search)
const myParam = urlParams.get('login')
if (myParam === 'visible') {
	showLoginForm()
}

const changeForm = () => {
	if (loginForm.classList.contains('disabled')) {
		registerForm.classList.add('disabled')
		loginForm.classList.remove('disabled')
	} else {
		registerForm.classList.remove('disabled')
		loginForm.classList.add('disabled')
	}
}

navLoginLink.addEventListener('click', showLoginForm)
loginMsg?.addEventListener('click', changeForm)
registerMsg?.addEventListener('click', changeForm)
