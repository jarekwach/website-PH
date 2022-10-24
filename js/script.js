import { getProducts } from './get-products.js'
import { navMobile } from './nav.js'

const productTitle = document.querySelector('.product-title')
const dateAdd = document.querySelector('.product-item-date')
const itemDescription = document.querySelector('.product-item-description')
const productImg = document.querySelector('.item-photo')
const allProductBox = document.querySelector('.all-products-box')

const voteBtn = document.querySelector('.vote-btn')
const numbersOfVote = document.querySelector('.number-of-votes')
let numVote = 0

const addVote = () => {
	numVote += 1
	numbersOfVote.textContent = numVote
}

voteBtn?.addEventListener('click', addVote)

console.log(document.querySelector('.js-vote'))
document.querySelector('.js-products').innerHTML = getProducts.join('')
console.log(document.querySelector('.js-vote'))
