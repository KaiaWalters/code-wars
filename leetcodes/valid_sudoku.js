/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    
    //     check if each row only has one of each number 
    //     sort the row, check that we have no duplicates, exclude "."s
        
    //     create a new array for each column, push each column into an array to build a new row
    //     check if that row contains any duplicates
    
     
        
        let rIsValid = board.forEach(row => {
            row.sort()
            row.forEach((box,index) =>{
                if(row[index] == row[index+1]){
                    return false
                }
            })
            return true
        })
        
        for(i=0; i <= board.length; i++) {
            
        }
    };