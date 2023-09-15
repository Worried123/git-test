/*
requirements of a tic tac toe game?
- 9 squares
- square selection
- computer square selection

- 2 symbols
- symbol selection

- a scoreboard
- win mechanic
- lose mechanic
- gameover mechanic


*/

/*
_|_|_
_|_|_
_|_|_
*/

/*
2. pick a square
*/
const numarr = []
let numObj = {};
let symbol = "X";
let index = 9;
const gameboard = [];

const constructGameBoard = () => {
  for (let i = 0; i < 9; i++) {
   
    const id = `box${i}`;
    console.log(id);
    const box = document.getElementById(`box${i}`);
    numObj[id] = box;
    box.addEventListener("click", () => {
      // if the box is not empty, you can't change it
      if (box.textContent !== "") {
        return;
      }

      // check here

      // if the box isn't full it can be changed
      // fill the box with the current symbol, change the symbol to the oppisite one
      if (symbol === "X") {
        box.textContent = symbol;
        console.log(numObj.textContent);
        numarr.push(i)
        console.log(numarr);
        symbol = 'O'
        
        
      }
        robotTurn()
      checkWincondition();
     
    })
  restartButton()
    };
    // add box to game board
    return numObj;
  }

constructGameBoard();

const checkWincondition = () => {
  /*
    ways to win:
    0, 1, 2
    3, 4, 5 horizontal
    6, 7, 8

    0, 3, 6
    1, 4, 7 vertical
    2, 5, 8

    0, 4, 8 diagnol
    2, 4, 6*/
  setTimeout(() => {
    forXsymbol(0, 1, 2)
    forXsymbol(3, 4, 5)
    forXsymbol(6, 7, 8)
    forXsymbol(0, 3, 6)
    forXsymbol(1, 4, 7)
    forXsymbol(2, 5, 8)
    forXsymbol(0, 4, 8)
    forXsymbol(2, 4, 6) 
    forOsymbol(0, 1, 2)
    forOsymbol(3, 4, 5)
    forOsymbol(6, 7, 8)
    forOsymbol(0, 3, 6)
    forOsymbol(1, 4, 7)
    forOsymbol(2, 5, 8)
    forOsymbol(0, 4, 8)
    forOsymbol(2, 4, 6)
    
  }, 1000);
};
function forXsymbol(a, b, c) {
  if (
    numObj[`box${a}`].textContent === "X" &&
    numObj[`box${b}`].textContent === "X" &&
    numObj[`box${c}`].textContent === "X"
  ) {
    numarr.length = 0
    symbol = 'X'
    const xwinner = document.createElement("div");
    xwinner.classList.add("winner");
    document.body.append(xwinner);
    xwinner.textContent = "X won";
    setTimeout(() => {
      xwinner.remove();
    }, 3000);
    for (let i = 0; i < 9; i++) {
      numObj[`box${i}`].textContent = "";
    }
    
  }
}
function forOsymbol(a, b, c) {
  if (
    numObj[`box${a}`].textContent === "O" &&
    numObj[`box${b}`].textContent === "O" &&
    numObj[`box${c}`].textContent === "O"
  ) {
    numarr.length = 0
    symbol = 'X'
    const xwinner = document.createElement("div");
    xwinner.classList.add("winner");
    document.body.append(xwinner);
    xwinner.textContent = "O won";
    setTimeout(() => {
      xwinner.remove();
    }, 4000);
    for (let i = 0; i < 9; i++) {
      numObj[`box${i}`].textContent = "";
    }
  }
}
function restartButton() {
  const restart = document.querySelector('.restart')
  restart.addEventListener('click',e=>{
    symbol = 'X'
    numarr.length = 0
  for (let i = 0; i < 9; i++) {
    numObj[`box${i}`].textContent = "";
  }
  })
}
  function robotTurn(){
    let Osymbol;
    do{
      if (numarr.length === 9) {
        symbol = 'X'
        break
        
      }else{
        Osymbol =  Math.floor(Math.random() * 9);

        console.log(symbol);
      }
      
      }while(numObj[`box${Osymbol}`].textContent !== '')
      numarr.push(Osymbol)
      if (numarr.length !== 9) {
        numObj[`box${Osymbol}`].textContent =symbol
        symbol = 'X'
        
      }else{
        return ;
      }
  
  }
