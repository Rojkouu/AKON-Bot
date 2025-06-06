module.exports = {
  name: 'hunt',
  description: 'اصطياد حيوانات باستخدام بوت AKON',
  execute(message, args) {
    const animals = ['🐇 أرنب', '🦌 غزال', '🦊 ثعلب', '🐻 دب', '🦁 أسد', '🐉 تنين', '🦅 نسر'];
    const specialAnimals = ['🌟 حيوان نادر', '💎 حيوان أسطوري'];
    
    // 10% فرصة للحصول على حيوان نادر
    const isRare = Math.random() < 0.1;
    const animal = isRare 
      ? specialAnimals[Math.floor(Math.random() * specialAnimals.length)]
      : animals[Math.floor(Math.random() * animals.length)];
    
    const emoji = config.emoji.akonz;
    const coinsEarned = isRare ? Math.floor(Math.random() * 50) + 50 : Math.floor(Math.random() * 20) + 10;
    
    economy.addCoins(message.author.id, coinsEarned);
    
    message.reply(`**لقد اصطدت: ${animal}!**\nرصيدك: ${economy.getCoins(message.author.id)} ${emoji} (+${coinsEarned} ${emoji})`);
  }
};