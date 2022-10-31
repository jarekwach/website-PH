export function addVotes(btn, numberOfVotes) {
	const allVoteBtn = document.querySelectorAll(btn)
	const numberOfVote = document.querySelectorAll(numberOfVotes)

	const votes = []

	allVoteBtn.forEach((el, index) => {
		votes.push({
			index,
			votesCount: 0,
		})

		el.addEventListener('click', (e) => {
			const obj = votes.find((item) => item.index === index)
			obj.votesCount = obj.votesCount + 1
			numberOfVote[index].textContent = obj.votesCount
		})
	})
}
