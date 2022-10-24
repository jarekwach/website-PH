// import { getProducts } from './get-products.js'

const loginMsg = document.querySelector('.login-msg')
const registerMsg = document.querySelector('.register-msg')
const loginForm = document.querySelector('.login-form')
const registerForm = document.querySelector('.register-form')
const navLoginLink = document.querySelector('.nav-login-link')
const productTitle = document.querySelector('.product-title')
const dateAdd = document.querySelector('.product-item-date')
const itemDescription = document.querySelector('.product-item-description')
const productImg = document.querySelector('.item-photo')
const burgerBtn = document.querySelector('.burger-ico')
const navMobileList = document.querySelector('.nav-mobile-list')
const allHideLink = document.querySelectorAll('.nav-mobile-list a')
const allProductBox = document.querySelector('.all-products-box')

const voteBtn = document.querySelector('.vote-btn')
const numbersOfVote = document.querySelector('.number-of-votes')
let numVote = 0

const urlParams = new URLSearchParams(window.location.search)
const myParam = urlParams.get('login')
if (myParam === 'visible') {
	showLoginForm()
}

function handleNav() {
	navMobileList.classList.toggle('active-nav-link')
}

allHideLink.forEach((item) =>
	item.addEventListener('click', () =>
		navMobileList.classList.remove('active-nav-link')
	)
)

function changeForm() {
	if (loginForm.classList.contains('disabled')) {
		registerForm.classList.add('disabled')
		loginForm.classList.remove('disabled')
	} else {
		registerForm.classList.remove('disabled')
		loginForm.classList.add('disabled')
	}
}

function showLoginForm() {
	loginForm.classList.remove('disabled')
	registerForm.classList.add('disabled')
}

const addVote = () => {
	numVote += 1
	numbersOfVote.textContent = numVote
}

burgerBtn.addEventListener('click', handleNav)
navLoginLink.addEventListener('click', showLoginForm)
loginMsg?.addEventListener('click', changeForm)
registerMsg?.addEventListener('click', changeForm)
voteBtn?.addEventListener('click', addVote)

// console.log(document.querySelector('.js-vote'))
document.querySelector('.js-products').innerHTML = getProducts.join('')
// console.log(document.querySelector('.js-vote'))
