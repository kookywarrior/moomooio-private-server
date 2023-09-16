module.exports = function (Tribe, findPlayerBySID, server) {
	this.tribes = {}
	this.createTribe = (name, player) => {
		const newTribe = new Tribe(name, findPlayerBySID, server)
		this.tribes[name] = newTribe
		newTribe.addPlayer(player)
		return newTribe
	}

	this.deleteTribe = (name) => {
		const tmpTribe = this.tribes[name]
		if (tmpTribe) {
			for (let i = 0; i < tmpTribe.members.length; i++) {
				const tmpPlayer = findPlayerBySID(tmpTribe.members[i])
				tmpPlayer.team = null
				tmpPlayer.isLeader = false
				server.send(tmpPlayer.id, "st", [null, 0])
			}
			delete this.tribes[name]
		}
	}

	this.getTribe = (name) => {
		return this.tribes[name]
	}
}
