const navMobileList = document.querySelector('.nav-mobile-list')
const allHideLink = document.querySelectorAll('.nav-mobile-list a')

export function handleNav() {
	navMobileList.classList.toggle('active-nav-link')
}

allHideLink.forEach((item) =>
	item.addEventListener('click', () =>
		navMobileList.classList.remove('active-nav-link')
	)
)
