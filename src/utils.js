// MATH UTILS:
var mathABS = Math.abs
var mathCOS = Math.cos
var mathSIN = Math.sin
var mathPOW = Math.pow
var mathSQRT = Math.sqrt
var mathATAN2 = Math.atan2
var mathPI = Math.PI

// GLOBAL UTILS:
module.exports.randInt = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}
module.exports.randFloat = function (min, max) {
	return Math.random() * (max - min + 1) + min
}
module.exports.random = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min
}
module.exports.lerp = function (value1, value2, amount) {
	return value1 + (value2 - value1) * amount
}
module.exports.decel = function (val, cel) {
	if (val > 0) {
		val = Math.max(0, val - cel)
	} else if (val < 0) {
		val = Math.min(0, val + cel)
	}
	return val
}
module.exports.getDistance = function (x1, y1, x2, y2) {
	return mathSQRT((x2 -= x1) * x2 + (y2 -= y1) * y2)
}
module.exports.getDirection = function (x1, y1, x2, y2) {
	return mathATAN2(y1 - y2, x1 - x2)
}
module.exports.getAngleDist = function (a, b) {
	var p = mathABS(b - a) % (mathPI * 2)
	return p > mathPI ? mathPI * 2 - p : p
}
module.exports.isNumber = function (n) {
	return typeof n == "number" && !isNaN(n) && isFinite(n)
}
module.exports.isNumber2 = function (potNum, isAbsoluteNumber, returnNumber) {
	if (!isAbsoluteNumber) {
		potNum = parseFloat(potNum)
	}
	if (returnNumber) {
		return potNum
	}
	return typeof potNum == "number" && !isNaN(potNum) && isFinite(potNum)
}
module.exports.isString = function (s) {
	return s && typeof s == "string"
}
module.exports.animateString = function (str) {
	let arr = str.split("")
	let mapFunction = function (letter) {
		if (Math.random() > 0.7) {
			return "~"
		} else {
			return letter
		}
	}
	let replacedArr = arr.map((letter) => mapFunction(letter))
	return replacedArr.join("")
}
module.exports.kFormat = function (num) {
	return num > 999 ? (num / 1000).toFixed(1) + "k" : num
}
module.exports.toRad = function (deg) {
	return deg * (Math.PI / 180)
}
module.exports.toDeg = function (rad) {
	return rad * (180 / Math.PI)
}
module.exports.capitalizeFirst = function (string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}
module.exports.fixTo = function (n, v) {
	return parseFloat(n.toFixed(v))
}
module.exports.sortByPoints = function (a, b) {
	return parseFloat(b.points) - parseFloat(a.points)
}
module.exports.lineInRect = function (recX, recY, recX2, recY2, x1, y1, x2, y2) {
	var minX = x1
	var maxX = x2
	if (x1 > x2) {
		minX = x2
		maxX = x1
	}
	if (maxX > recX2) {
		maxX = recX2
	}
	if (minX < recX) {
		minX = recX
	}
	if (minX > maxX) {
		return false
	}
	var minY = y1
	var maxY = y2
	var dx = x2 - x1
	if (Math.abs(dx) > 0.0000001) {
		var a = (y2 - y1) / dx
		var b = y1 - a * x1
		minY = a * minX + b
		maxY = a * maxX + b
	}
	if (minY > maxY) {
		var tmp = maxY
		maxY = minY
		minY = tmp
	}
	if (maxY > recY2) {
		maxY = recY2
	}
	if (minY < recY) {
		minY = recY
	}
	if (minY > maxY) {
		return false
	}
	return true
}
module.exports.randomString = function (length) {
	var text = ""
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	for (var i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length))
	}
	return text
}
module.exports.countInArray = function (array, val) {
	var count = 0
	for (var i = 0; i < array.length; i++) {
		if (array[i] === val) count++
	}
	return count
}
