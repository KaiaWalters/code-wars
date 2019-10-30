unction rowWeights(array){
  let players = [];
  let teamOne = [];
  let teamTwo = [];
  let newTeamOne = 0;
  let newTeamTwo = 0;

 array.forEach(function(element, index) {

  if(index % 2 === 0){

    teamOne.push(parseInt(element))

    newTeamOne = teamOne.reduce((c, b) => c + b)

  }else{
    teamTwo.push(parseInt(element))
    newTeamTwo = teamTwo.reduce((c, b) => c + b)
  }
});

  return [newTeamOne, newTeamTwo]

}
