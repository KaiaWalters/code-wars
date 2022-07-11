var isValidSudoku = function(board) {
    
    //     check if each row only has one of each number 
    //     sort the row, check that we have no duplicates, exclude "."s
        
    //     create a new array for each column, push each column into an array to build a new row
    //     check if that row contains any duplicates
        let columns = []
        let index = 0 
        let count = 0
        //for each row on board 
        // stop at the first element at index 0 
        //push that index into a seperate array
        //push that array into array columns
        //start from the beginning moving onto the next element at index 1 and so on...
        //stop when all boxes in a column have been validated

        while(count != 81) {
            let column = [] 
            for(let i=0; i <= 9; i++) {
                if(board[i][index] != ".") {
                        column.push(board[i][index])
                }
                index+=1
            }
            columns.push(column)
        }
        count+=9

        return(rowIsValid(rows) && rowIsValid(column))
    };

    var rowIsValid = function(board) {
        board.forEach(row => {
            let rowSorted = row.sort()
            rowSorted.forEach((box,index) =>{
                if(row[index] != "." && row[index] == row[index+1]){
                    return false
                }
            })
            return true
        })
    };

    let board = [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]

    isValidSudoku(board)