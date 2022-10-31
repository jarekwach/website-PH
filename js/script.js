import { getProducts } from './get-products.js'
import { handleNav } from './nav.js'
import { addVotes } from './voting.js'

document.querySelector('.burger-ico').addEventListener('click', handleNav)
document.querySelector('.js-products').innerHTML = getProducts.join('')
addVotes('.js-vote', '.number-of-votes')
