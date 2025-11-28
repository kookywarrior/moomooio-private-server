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
module.exports.randTeam = function (array, teamSize) {
	const teams = []
	for (let i = array.length - 1; i > 0; i--) {
		const randomIndex = Math.floor(Math.random() * (i + 1))
		;[array[i], array[randomIndex]] = [array[randomIndex], array[i]]
	}

	while (array.length > 0) {
		const team = []
		for (let i = 0; i < teamSize; i++) {
			team.push(array.pop())
		}
		teams.push(team)
	}
	return teams
}
const PACKETCODE = {
	SEND: {
		aJoinReq: "P",
		kickFromClan: "Q",
		sendJoin: "b",
		createAlliance: "L",
		leaveAlliance: "N",
		storeEquipOrBuy: "c",
		sendChat: "6",
		resetMoveDir: "e",
		sendAtckState: "F",
		sendMoveDir: "9",
		sendLockDirOrAutoGather: "K",
		sendMapPing: "S",
		selectToBuild: "z",
		enterGame: "M",
		sendUpgrade: "H",
		sendDir: "D",
		pingSocket: "0"
	},
	RECEIVE: {
		setInitData: "A",
		disconnect: "B",
		setupGame: "C",
		addPlayer: "D",
		removePlayer: "E",
		updatePlayers: "a",
		updateLeaderboard: "G",
		loadGameObject: "H",
		loadAI: "I",
		animateAI: "J",
		gatherAnimation: "K",
		wiggleGameObject: "L",
		shootTurret: "M",
		updatePlayerValue: "N",
		updateHealth: "O",
		killPlayer: "P",
		killObject: "Q",
		killObjects: "R",
		updateItemCounts: "S",
		updateAge: "T",
		updateUpgrades: "U",
		updateItems: "V",
		addProjectile: "X",
		remProjectile: "Y",
		serverShutdownNotice: "Z",
		addAlliance: "g",
		deleteAlliance: "1",
		allianceNotification: "2",
		setPlayerTeam: "3",
		setAlliancePlayers: "4",
		updateStoreItems: "5",
		receiveChat: "6",
		updateMinimap: "7",
		showText: "8",
		pingMap: "9",
		pingSocketResponse: "0"
	}
}
const OLDPACKETCODE = {
	SEND: {
		11: PACKETCODE.SEND.aJoinReq,
		12: PACKETCODE.SEND.kickFromClan,
		10: PACKETCODE.SEND.sendJoin,
		8: PACKETCODE.SEND.createAlliance,
		9: PACKETCODE.SEND.leaveAlliance,
		"13c": PACKETCODE.SEND.storeEquipOrBuy,
		ch: PACKETCODE.SEND.sendChat,
		rmd: PACKETCODE.SEND.resetMoveDir,
		c: PACKETCODE.SEND.sendAtckState,
		33: PACKETCODE.SEND.sendMoveDir,
		7: PACKETCODE.SEND.sendLockDirOrAutoGather,
		14: PACKETCODE.SEND.sendMapPing,
		5: PACKETCODE.SEND.selectToBuild,
		sp: PACKETCODE.SEND.enterGame,
		6: PACKETCODE.SEND.sendUpgrade,
		2: PACKETCODE.SEND.sendDir,
		pp: PACKETCODE.SEND.pingSocket
	},
	RECEIVE: {
		"io-init": PACKETCODE.RECEIVE.ioInit,
		id: PACKETCODE.RECEIVE.setInitData,
		d: PACKETCODE.RECEIVE.disconnect,
		1: PACKETCODE.RECEIVE.setupGame,
		2: PACKETCODE.RECEIVE.addPlayer,
		4: PACKETCODE.RECEIVE.removePlayer,
		33: PACKETCODE.RECEIVE.updatePlayers,
		5: PACKETCODE.RECEIVE.updateLeaderboard,
		6: PACKETCODE.RECEIVE.loadGameObject,
		a: PACKETCODE.RECEIVE.loadAI,
		aa: PACKETCODE.RECEIVE.animateAI,
		7: PACKETCODE.RECEIVE.gatherAnimation,
		8: PACKETCODE.RECEIVE.wiggleGameObject,
		sp: PACKETCODE.RECEIVE.shootTurret,
		9: PACKETCODE.RECEIVE.updatePlayerValue,
		h: PACKETCODE.RECEIVE.updateHealth,
		11: PACKETCODE.RECEIVE.killPlayer,
		12: PACKETCODE.RECEIVE.killObject,
		13: PACKETCODE.RECEIVE.killObjects,
		14: PACKETCODE.RECEIVE.updateItemCounts,
		15: PACKETCODE.RECEIVE.updateAge,
		16: PACKETCODE.RECEIVE.updateUpgrades,
		17: PACKETCODE.RECEIVE.updateItems,
		18: PACKETCODE.RECEIVE.addProjectile,
		19: PACKETCODE.RECEIVE.remProjectile,
		20: PACKETCODE.RECEIVE.serverShutdownNotice,
		ac: PACKETCODE.RECEIVE.addAlliance,
		ad: PACKETCODE.RECEIVE.deleteAlliance,
		an: PACKETCODE.RECEIVE.allianceNotification,
		st: PACKETCODE.RECEIVE.setPlayerTeam,
		sa: PACKETCODE.RECEIVE.setAlliancePlayers,
		us: PACKETCODE.RECEIVE.updateStoreItems,
		ch: PACKETCODE.RECEIVE.receiveChat,
		mm: PACKETCODE.RECEIVE.updateMinimap,
		t: PACKETCODE.RECEIVE.showText,
		p: PACKETCODE.RECEIVE.pingMap,
		pp: PACKETCODE.RECEIVE.pingSocketResponse
	}
}
const NEWPACKETCODE = {
	SEND: {},
	RECEIVE: {}
}
for (const key in OLDPACKETCODE.SEND) {
	NEWPACKETCODE.SEND[OLDPACKETCODE.SEND[key]] = key
}
for (const key in OLDPACKETCODE.RECEIVE) {
	NEWPACKETCODE.RECEIVE[OLDPACKETCODE.RECEIVE[key]] = key
}
module.exports.OldToNew = function (packetCode, type) {
	return OLDPACKETCODE[type][packetCode]
}
module.exports.NewToOld = function (packetCode, type) {
	return NEWPACKETCODE[type][packetCode]
}
