const generateProductsList = (data) =>
	data.items.map((item) => parsedItem(item))

const parsedItem = (item) => `
    <div class="product-box">
    <div class="product-item-photo">
        <img class="item-photo" src="${item.photo}" alt="${item.title}">
    </div>
    <div class="product-item-box">
        <div class="product-item-title">
            <h3 class="product-title">${item.title}</h3>
            <p class="product-item-description">${item.description}</p>
            <div class="product-item-date">${item.dateAdded}</div>
        </div>
        <div class="btn-box">
            <button class="vote-btn js-vote">
            <i class="fa-regular fa-thumbs-up"></i></button>
            <p class="number-of-votes"></p>
        </div>
    </div>
</div>`

export const getProducts = await fetch('../items.json')
	.then((res) => res.json())
	.then((data) => generateProductsList(data))
