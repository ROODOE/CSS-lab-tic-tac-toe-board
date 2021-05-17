// Game Variables
let gameOn = true;
let player1 = "x",
    player2 = "o";

let cells = document.querySelectorAll('.row > div');

let clickNum = 0;

for (let i = 0; i < cells.length; i++) {
    (cells[i]).addEventListener('click', cellClicked);
};

/*cells.forEach(cell => {
    cell.addEventListener('click', cellClicked);
});*/

function cellClicked(e) {

    if (e.target.classList.contains('clicked') == false) {
        clickNum++;//Increase click counter
        e.target.classList.add('clicked');
        if (clickNum % 2 == true) {
            e.target.classList.add(player1);
            e.target.innerHTML = player1;
            gameIsWon(player1);
        } else if (clickNum % 2 == false) {
            e.target.classList.add(player2);
            e.target.innerHTML = player2;
            gameIsWon(player2);
        };
        // Check if there's a winner
    };
};
console.log(cells);

function gameIsWon(combo) {

    let checkBoard = [
        [cells[0].innerHTML, cells[1].innerHTML, cells[2].innerHTML],
        [cells[3].innerHTML, cells[4].innerHTML, cells[5].innerHTML],
        [cells[6].innerHTML, cells[7].innerHTML, cells[8].innerHTML],
        [cells[0].innerHTML, cells[3].innerHTML, cells[6].innerHTML],
        [cells[1].innerHTML, cells[4].innerHTML, cells[7].innerHTML],
        [cells[2].innerHTML, cells[5].innerHTML, cells[8].innerHTML],
        [cells[0].innerHTML, cells[4].innerHTML, cells[8].innerHTML],
        [cells[2].innerHTML, cells[4].innerHTML, cells[6].innerHTML]
    ];
    console.log(checkBoard);

    /*let checkBoard = [
        [cells[0].innerHTML, cells[1].innerHTML, cells[2].innerHTML],
        [cells[3], cells[4], cells[5]],
        [cells[6], cells[7], cells[8]],
        [cells[0], cells[3], cells[6]],
        [cells[1], cells[4], cells[7]],
        [cells[2], cells[5], cells[8]],
        [cells[0], cells[4], cells[8]],
        [cells[2], cells[4], cells[6]]
    ];*/


    /*for (let i = 0; i < checkBoard.length; i++) {
        console.log(checkBoard);
        if (checkBoard[i][0], checkBoard[i][1], checkBoard[i][2] && clickNum % 2 == true) {
            document.getElementById('.winner').innerHTML = 'X HAS WON!';
            gameIsLive = false;
        } else if (checkBoard[i][0], checkBoard[i][1], checkBoard[i][2] && clickNum % 2 == false) {
            document.getElementById('.winner').innerHTML = 'O HAS WON!';
            gameOn = false;
        } else if (clickNum >= 9) {
            gameOn = false;
        }
    };*/

    // use a loop and then a nested loop, inside the first loop set variable to  check if cell is filled.

    for (let i = 0; i < checkBoard.length; i++) {
        [k, l, m] = [checkBoard[i][0], checkBoard[i][1], checkBoard[i][2]];

        /*for (let j = 0; j < cells.length; j++) {
            if (cells[j] === ) {
                let msg = 'X HAS WON!';
                document.querySelector('.winner').innerHTML = msg;
            }
        }
        /*let k = checkBoard[i][1].innerHTML;
        let l = checkBoard[i][2].innerHTML;
        console.log(j, k, l)*/

        if (k === combo && l === combo && m === combo && clickNum % 2 == true) {
            let msg = 'X HAS WON!';
            document.querySelector('.winner').innerHTML = msg;
            gameOn = false;
        } else if (k === combo && l === combo && m === combo && clickNum % 2 == false) {
            let msg = 'O HAS WON!';
            document.querySelector('.winner').innerHTML = msg;
            gameOn = false;
        }
    }

};

function selector(e) {
    return document.querySelector('.row > div').innerHTML;
};

function strike() {
    
}
