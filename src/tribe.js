module.exports = function (name, findPlayerBySID, server) {
	this.name = name
	this.members = []
	this.ownerID = null
	this.joinQueue = []

	this.addPlayer = (player) => {
		player.team = this.name
		if (this.ownerID === null) {
			this.ownerID = player.sid
			player.isLeader = true
		}
        this.members.push(player.sid)
		const tmpData = this.getMembers()
		for (let i = 0; i < this.members.length; i++) {
			server.send(findPlayerBySID(this.members[i]).id, "sa", [tmpData])
		}
	}

	this.removePlayer = (player) => {
		player.team = null
		player.isLeader = false
		this.members.splice(this.members.indexOf(player.sid), 1)
		const tmpData = this.getMembers()
		for (let i = 0; i < this.members.length; i++) {
			server.send(findPlayerBySID(this.members[i]).id, "sa", [tmpData])
		}
	}

	this.getData = () => {
		return {
			sid: this.name,
			ownerID: this.ownerID
		}
	}

	this.getMembers = () => {
		var tmpMembers = []
		for (let i = 0; i < this.members.length; i++) {
			const tmpPlayer = findPlayerBySID(this.members[i])
			if (tmpPlayer) {
				tmpMembers.push(tmpPlayer.sid, tmpPlayer.name)
			}
		}
		return tmpMembers
	}
}
