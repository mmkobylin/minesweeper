//loading the entire web
document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid')

    let width = 10; 

    //squares being an empty array
    let squares = []; 

    // create board
    function createBoard() {
        //making 100 items
        for(let i = 0; i < width*width; i++) {
            //creating div elements
            const square = document.createElement('div');
            //attaching number to each square
            square.setAttribute('id', i)
            //appending them to grid
            grid.appendChild(square)

            squares.push(square)
        }
    }

    createBoard()

})