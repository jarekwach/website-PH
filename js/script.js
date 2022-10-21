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

const divProductBox = document.createElement('div')
divProductBox.classList.add('product-box')
const divProductItemPhoto = document.createElement('div')
divProductItemPhoto.classList.add('product-item-photo')
const imgItemPhoto = document.createElement('img')
imgItemPhoto.classList.add('item-photo')
const divProtuctItemBox = document.createElement('div')
divProtuctItemBox.classList.add('product-item-box')
const divProductItemTitle = document.createElement('div')
divProductItemTitle.classList.add('product-item-title')
const headingProductTitle = document.createElement('h3')
headingProductTitle.classList.add('product-title')
const parItemDescription = document.createElement('p')
parItemDescription.classList.add('product-item-description')
const productItemDate = document.createElement('div')
productItemDate.classList.add('product-item-date')
const divBtnBox = document.createElement('div')
divBtnBox.classList.add('btn-box')
const buttonVoteBtn = document.createElement('button')
buttonVoteBtn.classList.add('vote-btn')
const pNumbersVote = document.createElement('p')
pNumbersVote.classList.add('number-of-votes')
const iconVote = document.createElement('i')
iconVote.classList.add('fa-regular', 'fa-thumbs-up')

const voteBtn = document.querySelector('.vote-btn')
const numbersOfVote = document.querySelector('.number-of-votes')
let numVote = 0

function addProductBox() {
	allProductBox.append(divProductBox)
	divProductBox.append(divProductItemPhoto, divProtuctItemBox)
	divProductItemPhoto.append(imgItemPhoto)
	divProtuctItemBox.append(divProductItemTitle, divBtnBox)
	divBtnBox.append(buttonVoteBtn, pNumbersVote)
	divProductItemTitle.append(
		headingProductTitle,
		parItemDescription,
		productItemDate
	)
	buttonVoteBtn.append(iconVote)
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

fetch('./items.json')
	.then((res) => res.json())
	.then(function (data) {
		productTitle.textContent = data.items[0].title
		itemDescription.textContent = data.items[0].description
		dateAdd.textContent = data.items[0].dateAdded
		productImg.setAttribute('src', data.items[0].photo)
	})
	.catch((err) => console.error(err))

burgerBtn.addEventListener('click', handleNav)
navLoginLink.addEventListener('click', showLoginForm)
loginMsg.addEventListener('click', changeForm)
registerMsg.addEventListener('click', changeForm)
voteBtn.addEventListener('click', addVote)
