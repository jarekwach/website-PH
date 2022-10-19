const loginMsg = document.querySelector('.login-msg')
const registerMsg = document.querySelector('.register-msg')
const loginForm = document.querySelector('.login-form')
const registerForm = document.querySelector('.register-form')
const navLoginLink = document.querySelector('.nav-login-link')

const productTitle = document.querySelector('.product-title')
const dateAdd = document.querySelector('.product-item-date')
const itemDescription = document.querySelector('.product-item-description')
const productImg = document.querySelector('.item-photo')

function changeForm() {
	loginForm.classList.toggle('disabled')
	registerForm.classList.toggle('disabled')
}

function showLoginForm() {
	loginForm.classList.remove('disabled')
	registerForm.classList.add('disabled')
}

fetch('./items.json')
	.then((res) => res.json())
	.then(function (data) {
		productTitle.textContent = data.items[0].title
		itemDescription.textContent = data.items[0].description
		dateAdd.textContent = data.items[0].dateAdded
		productImg.setAttribute('src', data.items[0].photo)
	})
	.catch((err) => console.error(err))

loginMsg.addEventListener('click', changeForm)
registerMsg.addEventListener('click', changeForm)
navLoginLink.addEventListener('click', showLoginForm)
