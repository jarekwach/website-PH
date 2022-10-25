import { getProducts } from './get-products.js'
import { navMobile } from './nav.js'

// const productTitle = document.querySelector('.product-title')
// const dateAdd = document.querySelector('.product-item-date')
// const itemDescription = document.querySelector('.product-item-description')
// const productImg = document.querySelector('.item-photo')
// const allProductBox = document.querySelector('.all-products-box')

// console.log(document.querySelector('.js-vote'))
document.querySelector('.js-products').innerHTML = getProducts.join('')
// console.log(document.querySelector('.js-vote'))

// const addVote = () => {
// 	numVote += 1
// 	numbersOfVote.textContent = numVote
// }

// const jsBtnVote = document.querySelectorAll('.js-vote')

// voteBtn?.addEventListener('click', addVote)

const allVoteBtn = document.querySelectorAll('.js-vote')
let numVote = 0

allVoteBtn.forEach((el) =>
	el.addEventListener('click', (e) => {
		const parent = e.target.closest('.btn-box')
		
		numVote += 1
		parent.querySelector('.number-of-votes').textContent = numVote
	})
)
