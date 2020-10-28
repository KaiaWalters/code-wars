function calculateDamage(yourType, opponentType, attack, defense){
  
  let types = {
      firewater : 0.5, 
      waterfire: 0.5, 
      firegrass: 2, 
      grassfire: 0.5, 
      fireelectric: 1,
      electricfire: 1, 
      watergrass: 0.5, 
      grasswater: 0.5,
      waterelectric: 0.5,
      electricwater: 0.5, 
      grasselectric: 1,
      electricgrass: 1, 
      electricelectric: 1, 
      firefire: 1, 
      waterwater: 1, 
      grassgrass: 1
    }
  let thing = { effect: yourType + opponentType}
    
  let effect = { value: types[thing.effect]}
  
  let yourEffect = effect.value
     
  let damage = (50 * (attack / defense) * yourEffect)
  console.log(damage) 
  
  return damage
}

calculateDamage("grass", "water", 40, 40)

