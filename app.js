//loading the entire web
document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid')

    let width = 10

    //squares being an empty array
    let squares = []; 

    let bombAmount = 20

    // create board
    function createBoard() {
        //adding bomb property to the squares
        const bombsArray = Array(bombAmount).fill('bomb')

        //adding empties - total - amount of bombs
        const emptyArray = Array(width*width - bombAmount).fill('empty')

        console.log(bombsArray);
        console.log(emptyArray);


        //making 100 items
        for(let i = 0; i < width*width; i++) {
            //creating div elements
            const square = document.createElement('div');
            //attaching number to each square
            square.setAttribute('id', i)
            //appending them to grid
            grid.appendChild(square)
            //square pushed to an empty array
            squares.push(square)
        }
    }
    //function invoked
    createBoard()

})