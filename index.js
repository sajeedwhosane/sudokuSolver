
const title = document.getElementById('title');

//solve 3x3 sudoku
// check if the sudoku puzzle provided is valid or not
        //should not have the same value in the same row, column or square
// step 1 get a value for cell,
// check the row values, 
//column values and 
//square values to check if they are not the same.
var sudokuBoard=[[0,1,0,0,0,7,8,5,6],
                 [7,8,6,0,1,5,0,0,4],
                 [4,0,0,0,8,3,0,1,0],
                 [0,0,0,1,0,2,0,6,0],
                 [2,0,0,0,9,0,0,7,0],
                 [0,0,5,0,0,4,0,2,0],
                 [0,0,3,8,0,0,6,9,0],
                 [0,2,0,0,4,0,1,8,0],
                 [1,9,0,0,5,6,0,4,7]  
                ];
//document.write(sudokuBoard[0][1])
    //check board
// column    0,0, 1,0 2,0
    // row   0,0 0,1 0,2
    
    //board  0,0 0,1 0,2
    //       1,0 1,1 1,2
    //       2,0 2,1 2,2 
              
    
//helper functions

//getRowValues
let getRowValues=(board,row,)=>{
                    let boardLen=board[row].length;
                    rowValues=[];
                    for(let i=row;i<row+1;i++){
                            for(let j=0;j<boardLen;j++){
                                rowValues.push(board[i][j]);
                            }
                    }
                       return rowValues;
}
document.write(getRowValues(sudokuBoard,2));
//getColValues
let getColValues=(board,col)=>{
                    let boardLen=board[col].length;
                    colValues=[];
                    for(let i=0;i<boardLen;i++){
                        for(let j=col;j<col+1;j++){
                            colValues.push(board[i][j]);
                        }
                    }
                    return colValues;
}


//getBoardValues

let getBoardValues=(board,row,col)=>{
                        let boardLen=board[row].length;
                        let gridRow=Math.floor(row/3)*3;
                        let gridCol=Math.floor(col/3)*3;
                        gridValues=[];
                        for(let i=gridRow;i<gridRow+3;i++){
                            for(let j=gridCol;j<gridCol+3;j++){
                                gridValues.push(board[i][j]);

                            }
                        }
                        console.log(gridValues);
                        console.log(gridRow,gridCol);
}


getBoardValues(sudokuBoard,3,4);


// function to check if the given sudoku is valid or not

let checkBoard=(board)=>{
    //getting number of rows and columns 
                let boardClen=board.length;
                let boardRlen=board[0].length;
                console.log(`number of rows:${boardRlen}`);
                console.log(`number of cols:${boardClen}`);
    //check if the rows and columns can be divided by 3
                if((boardClen%3)!==0 || (boardRlen%3)!==0){
                    console.log("not a valid board");
                    return;
                }else{
                    for(let i=0;i<boardClen;i++){
                        let len=board[i].length;
                        if(len!== boardClen){
                            console.log("not a valid board, it is not a nXn board");
                            return;
                        }
                    }
                    //checks for values that are greater than 9
                    for(let i=0;i<boardClen;i++){
                        for(const cell of board[i]){
                            if(cell>9){
                                console.log("Invalid values in the puzzle, the value of a cell is greater than 9");
                                return;
                            }
                        }
                    }

                }

}
checkBoard(sudokuBoard);