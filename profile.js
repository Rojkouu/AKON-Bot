module.exports = {
  name: 'profile',
  description: 'عرض ملفك الشخصي في بوت AKON',
  execute(message) {
    const economy = require('../systems/economy');
    const levels = require('../systems/levels');
    
    const coins = economy.getCoins(message.author.id);
    const level = levels.getLevel(message.author.id);
    
    message.reply({
      embeds: [{
        title: `👤 ملف ${message.author.username}`,
        fields: [
          { name: 'المستوى', value: level.toString(), inline: true },
          { name: 'العملات', value: `${coins} ${config.emoji.akonz}`, inline: true }
        ],
        thumbnail: { url: message.author.displayAvatarURL() },
        color: 0x00FF00
      }]
    });
  }
};