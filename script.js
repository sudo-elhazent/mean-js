//mean javascript
function searchMean(num) {
	var result = 0;
	for (var i = 0; i < num.length; i++) {
		result += num[i]
	}
	return hasilTotal = Math.round(result/num.length)
}
console.log(searchMean([1, 2, 3, 4, 5])); // 3
console.log(searchMean([3, 5, 7, 5, 3])); // 5
console.log(searchMean([6, 5, 4, 7, 3])); // 5
console.log(searchMean([1, 3, 3])); // 2
console.log(searchMean([7, 7, 7, 7, 7])); // 7
