export default function (sides, dice, rolls) {
	let results = []
	for (let j=0; j<rolls; j++){
		let sum=0
		for (let i=0; i<dice; i++){
			sum+=Math.floor(Math.random()*sides)+1
		}
		results.push(sum)
	}
	return results
}
