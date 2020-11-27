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

        //joining array
        const gameArray = emptyArray.concat(bombsArray);
        
        //randomising the item
                            //taking an array and sorting it;
                                                //applying Math.random() function evenly
        const shuffleArray = gameArray.sort(() => Math.random() - 0.5)

        console.log(shuffleArray);


        //making 100 items
        for(let i = 0; i < width*width; i++) {
            //creating div elements
            const square = document.createElement('div');
            //attaching number to each square
            square.setAttribute('id', i)
            
            //adding class of fill
            square.classList.add(shuffleArray[i])
            //appending them to grid
            grid.appendChild(square)
            //square pushed to an empty array
            squares.push(square)
        }

        for (let i = 0; i < squares.length, i++) {

            //is is on the right edge?
            const isLeftEdge = (i % width === 0)
            
            //if i is divided by 10, it leaves 9 === width (10) - 1
            const ifRightEdge = (i % width === width - 1 )

            

        }
    }
    //function invoked
    createBoard()

})