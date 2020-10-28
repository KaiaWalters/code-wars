
//to be continued


function password(str) {
 let pass=str.split("")
 let plength=pass.length
 let upCount=0
 let special="~`!#$%^&*+=-[]\\\';,/{}|\":<>?"
 let realSpecial=special.split("")
 let specialCount=0
 console.log(realSpecial)

  if(plength<8){
    console.log("password is too short")
  }else if(plength>10){
    console.log("password is too long")
  }
 //checkForSpecialCharacters
  for(i in realSpecial){
    for(j in pass){
     if(i===j){
       specialCount+=1
      }
    }
  for(j in pass){
    if(pass[j]===pass[j].toUpperCase()){
       upCount+=1
     }
  }
  }console.log("rah", specialCount,"blah", upCount)
 //checkForupperCas

 }

password("aBCd")
