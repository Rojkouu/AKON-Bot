require('dotenv').config();
const { Client, Intents } = require('discord.js');
const fs = require('fs');
const path = require('path');
const config = require('./config/config.json');

// تعريف client هنا
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS
  ]
});

// تحميل الأوامر
client.commands = new Map();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.name, command);
}

// الأحداث
client.on('ready', () => {
  console.log(`تم تشغيل بوت ${config.botName} بنجاح!`);
  client.user.setActivity(`AKON Bot | ${config.prefix}help`);
});

client.on('messageCreate', message => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
  
  if (!client.commands.has(commandName)) return;
  
  try {
    client.commands.get(commandName).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('حدث خطأ أثناء تنفيذ الأمر!');
  }
});

// تسجيل الدخول
client.login(process.env.BOT_TOKEN);