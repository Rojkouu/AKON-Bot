// ... الكود السابق ...

module.exports = {
  // ... الدوال السابقة ...
  
  getBalance(userId) {
    return economyData[userId]?.coins || 0;
  },
  
  transferCoins(senderId, receiverId, amount) {
    if (!this.hasEnoughCoins(senderId, amount)) {
      return false;
    }
    
    this.addCoins(senderId, -amount);
    this.addCoins(receiverId, amount);
    return true;
  },
  
  hasEnoughCoins(userId, amount) {
    return this.getCoins(userId) >= amount;
  }
};