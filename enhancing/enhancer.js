
class newItem{
  constructor(name, durability, enchantment){
    this.name = name,
    this.durability = durability,
    this.enchantment = enchantment
  }
  repair(item) {
    return { ...item, durability: 100 };
  }
  success(item) {
  if(item.enchantment >= 20){
    return {...item, enchantment:20}
  }else{
    const enchant = item.enchantment += 1
    return {...item, enchantment:enchant}
  }
  }
  fail(item) {
    if(item.enchantment < 15){
      const enchant = item.durability -= 5
      return {...item, durability: enchant}
    } else if(item.enchantment = 15){
      const dechant = item.durability -= 10
      return {...item, durability:dechant}
    } else if(item.enchantment >= 16){
      const fail = item.durability -= 10
      const failE = item.enchantment -= 1
      return {...item, durability: fail, enchantment: failE}
    } else{
      console.log('wtf')
    }
  }
}








function get(item) {
  return { ...item };
}

module.exports = {
  get,
  newItem
};