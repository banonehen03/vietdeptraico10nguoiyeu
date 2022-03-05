module.exports.config = {
	name: "console",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "...",
	description: "Console",
	commandCategory: "System",
	usages: "",
	cooldowns: 0
};

module.exports.handleEvent = async function({ api, args, Users, event, Threads, utils, client }) {
	let {messageID, threadID, senderID,mentions} = event;
  const chalk = require('chalk');
 const moment = require("moment-timezone");
var time= moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:s || DD/MM/YYYY");

  
const name = await Users.getNameUser(event.senderID)

var threadName = global.data.threadInfo.get(threadID).threadName|| "Tên không tồn tại";

var msg = event.body||"Ảnh, video hoặc ký tự đặc biệt";

 console.log(chalk.red(`${time}: `) + chalk.blue(`${threadName}`) + ` | `+ chalk.green(`${name}`) + `-` + chalk.magenta(`${senderID}:`) + msg )
}

module.exports.run = async function({  api, args, Users, event, Threads, utils, client}) {}
