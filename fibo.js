// возвращает массив заданой длинны

Object.defineProperty(Number.prototype, "fibo", {
	get: function() {
		var length = this
		var result = [1, ]
		var num = 1
		var i = 0
		while (result.length < length) {
			result.push(num)
			num = result[i] + result[i+1]
			i++
		}
		return result
	},
	enumerable:false,
	configutable:true
})

13..fibo // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]
15..fibo
