// ==UserScript==
// @name         Moomoo.io Private server
// @description  Let you connect to the private server
// @icon         https://moomoo.io/img/favicon.png?v=1
// @author       KOOKY WARRIOR
// @version      0.1.1
// @match        *://*.moomoo.io/*
// @grant        none
// ==/UserScript==

;(async () => {
	function getLocation(href) {
		if (!href) return null
		var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/)
		return (
			match && {
				href: href,
				protocol: match[1],
				host: match[2],
				hostname: match[3],
				port: match[4],
				pathname: match[5],
				search: match[6],
				hash: match[7]
			}
		)
	}
	const urlobj = getLocation(window.prompt("URL", ""))

	if (!urlobj?.host) return

	window.PrivateServer = true
	let ws = window.WebSocket
	class PrivateServer extends ws {
		constructor() {
			super(`${urlobj.protocol == "https" ? "wss" : "ws"}://${urlobj.host}/server`)
		}
	}
	window.WebSocket = PrivateServer
})()
