// ==UserScript==
// @name         Moomoo.io Private server
// @description  Let you connect to the private server
// @icon         https://moomoo.io/img/favicon.png?v=1
// @author       KOOKY WARRIOR
// @version      0.3
// @match        *://*.moomoo.io/*
// @run-at       document-start
// @grant        unsafeWindow
// @downloadURL  https://github.com/kookywarrior/moomooio-private-server/raw/main/userscript.user.js
// @updateURL    https://github.com/kookywarrior/moomooio-private-server/raw/main/userscript.user.js

// ==/UserScript==

;(async () => {
	let privateServerLink = ""
	if (unsafeWindow.location.search) {
		const urlParam = new URLSearchParams(unsafeWindow.location.search)
		privateServerLink = urlParam.get("privateServer") || ""
	}

	if (privateServerLink) {
		function getLocation(string) {
			let url
			try {
				url = new URL(string)
			} catch (_) {
				return false
			}
			return url
		}

		const urlobj = getLocation(privateServerLink)
		if (!urlobj || !(urlobj.protocol === "http:" || urlobj.protocol === "https:")) {
			console.error("Invalid Private Server Link")
		} else {
			let ws = unsafeWindow.WebSocket
			class PrivateServer extends ws {
				constructor() {
					super(`${urlobj.protocol == "https:" ? "wss" : "ws"}://${urlobj.host}/server`)
				}
			}
			unsafeWindow.WebSocket = PrivateServer
			unsafeWindow.privateServer = true
		}
	}

	unsafeWindow.addEventListener("DOMContentLoaded", () => {
		const join = document.createElement("div")
		join.id = "joinPrivateServerButton"
		join.className = "ytLink"
		join.style = `
		position: absolute;
		top: 88px;
		right: 20px;
		cursor: pointer;
		`
		join.innerHTML = `<span>Join Private Server</span> <i class="material-icons" style="font-size:30px;vertical-align:middle"></i>`
		join.addEventListener("click", () => {
			const link = unsafeWindow.prompt("Private Server Link", privateServerLink)
			if (link) {
				unsafeWindow.onbeforeunload = undefined
				unsafeWindow.location.href = "https://moomoo.io/?privateServer=" + link
			}
		})
		document.getElementById("mainMenu").appendChild(join)
	})
})()
