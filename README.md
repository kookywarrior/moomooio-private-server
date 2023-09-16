# MooMoo.io Private Server

This guide will show you how to set up your own private server and allow others to join in for some fun!

## Requirements

- Any operating system that can run Node.js
- [Node.js](https://nodejs.org/en/download) installed
- [Tampermonkey](https://www.tampermonkey.net) installed

## Hosting

1. Download and unzip [this](https://github.com/kookywarrior/moomooio-private-server/archive/refs/heads/main.zip). 
2. Open the terminal and navigate to the destination path of the unzipped folder.
3. Run this command: `npm install`.
4. Then follow by this command: `node .`

## Play Locally

1. Install [this userscript](https://github.com/kookywarrior/moomooio-private-server/raw/main/userscript.user.js).
2. Visit https://moomoo.io.
3. In the popup box, insert `http://localhost:1234`.

## Share Link to the Public

There are many providers available to help you share your localhost to the public, but my favorite is ngrok.

1. Go to [ngrok](https://dashboard.ngrok.com/get-started/setup).
2. Download ngrok and follow the instructions there.
3. Start a HTTP tunnel forwarding to your local port by using this command: `ngrok http 1234`.
4. Go to [ngrok agents](https://dashboard.ngrok.com/tunnels/agents).
5. Copy the ngrok tunnel link and share it with your friends.

## Connect to the ngrok link

1. Ask them to install [the userscript](https://github.com/kookywarrior/moomooio-private-server/raw/main/userscript.user.js).
2. Visit the ngrok tunnel link.
3. Visit https://moomoo.io.
4. In the popup box, insert the ngrok tunnel link.

## Commands

Add the prefix at the beginning of every command:

| Name      | Parameter(s)                     |
| --------- | ---------------------------------|
| login     | `password`                       |
| setup     | none                             |
| speed     | `number` (default is 0.0016)     |
| tp        | `player_sid` OR `x` `y`          |
| v         | `ruby/diamond/gold/normal`       |
| sb        | none                             |
| die       | none                             |
| upgrade   | `integer_number`                 |
| dmg       | none OR `number`                 |
| breakall  | none                             |

## Environment Variables

Not recommended to change if you don't know anything about coding:

| Variables | Value           |
| --------- | --------------- |
| PORT      | Default is 1234 |
| PREFIX    | Default is !    |
| PASSWORD  | Default is kooky|

## Reference

- https://moomoo.io/bundle.js
- https://github.com/Picoseconds/sanctuary
- https://github.com/wwwg/m.io