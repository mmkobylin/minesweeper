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

            //adding event listener to each square
            square.addEventListener('click', function(e) {
                click(square)
            })

        }

        for (let i = 0; i < squares.length; i++) {
            
            let total = 0 
            //is is on the right edge?
            const isLeftEdge = (i % width === 0)
            
            //if i is divided by 10, it leaves 9 === width (10) - 1
            const isRightEdge = (i % width === width - 1 )

            // if it is not a bomb
            if (squares[i].classList.contains('empty')) {
                //is the item on left containing bomb?
                if (i > 0 && !isLeftEdge && squares[i-1].classList.contains('bomb')) total ++

                //is the item on right-up containing bomb?
                if (i > 9 && !isRightEdge && squares[i+1-width].classList.contains('bomb')) total ++

                //is the item directly up containind bomb
                if (i > 10 && squares[i-width].classList.contains('bomb')) total ++

                //is the item on left-up containing bomb?
                if (i > 11 && !isLeftEdge && squares[i-1-width].classList.contains('bomb')) total ++
                
                //is the item on right containing bomb?
                if (i > 0 && !isRightEdge && squares[i+1].classList.contains('bomb')) total ++

                //is the item directly below containind bomb
                if (i < 89 && squares[i+width].classList.contains('bomb')) total ++

                 //is the item on right-down containing bomb?
                 if (i < 88 && !isRightEdge && squares[i+1+width].classList.contains('bomb')) total ++

                 //is the item on left-down containing bomb?
                 if (i < 90 && !isLeftEdge && squares[i-1+width].classList.contains('bomb')) total ++
 

                squares[i].setAttribute('data', total)
                console.log(squares[i])
            }

        }
    }
    //function invoked
    createBoard()

    //click on square action
    function click(square) {
        if (square.classList.contains('bomb')){
            console.log('Game over')
        }
    }

})