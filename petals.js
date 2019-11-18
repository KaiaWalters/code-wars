function howMuchILoveYou(nbPetals) {
    const petals = ["I love you","a little","a lot","passionately","madly","not at all"]
    const equation = nbPetals%6 - 1
    if(nbPetals%6===0){
      console.log(petals[5])
    }else if(equation === -1){
      console.log(petals[0])
    }else{
      console.log(petals[equation])
    }
  }