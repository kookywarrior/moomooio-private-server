// ==UserScript==
// @name         Moomoo.io Private server
// @description  Let you connect to the private server
// @icon         https://moomoo.io/img/favicon.png?v=1
// @author       KOOKY WARRIOR
// @version      0.2
// @match        *://*.moomoo.io/*
// @grant        none
// ==/UserScript==

;(async () => {
	function getLocation(string) {
		let url
		try {
			url = new URL(string)
		} catch (_) {
			return false
		}
		return url
	}
	const urlobj = getLocation(window.prompt("URL", ""))

	if (!urlobj || !(urlobj.protocol === "http:" || urlobj.protocol === "https:")) return

	window.PrivateServer = true
	let ws = window.WebSocket
	class PrivateServer extends ws {
		constructor() {
			super(`${urlobj.protocol == "https:" ? "wss" : "ws"}://${urlobj.host}/server`)
		}
	}
	window.WebSocket = PrivateServer
})()
