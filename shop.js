module.exports = {
  name: 'shop',
  description: 'متجر بوت AKON',
  execute(message) {
    const items = [
      { id: 1, name: '🎣 صنارة صيد', price: 50 },
      { id: 2, name: '🌿 نبتة سحرية', price: 100 },
      { id: 3, name: '🔮 كرة بلورية', price: 200 },
      { id: 4, name: '🏹 قوس سحري', price: 500 }
    ];
    
    const embed = {
      title: '🛒 متجر AKON',
      description: 'اشتري عناصر خاصة باستخدام عملات AKONZ!',
      fields: items.map(item => ({
        name: `${item.name} - ${item.price} ${config.emoji.akonz}`,
        value: `استخدم \`ak!buy ${item.id}\` للشراء`
      })),
      color: 0xFFA500
    };
    
    message.reply({ embeds: [embed] });
  }
};