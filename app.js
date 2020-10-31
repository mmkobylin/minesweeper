// making sure the content is first loaded
document.addEventListener('DOMContentLoaded', () => {

    //picking the grid class item and making it a variable
    const grid = document.querySelector('.grid')
    
    let width = 10
    let bombAmount = 20
    let squares = []
    
    //createBoard 
    function createBoard(){

        //bombs array declared
        const bombsArray = Array(bombAmount).fill('bomb')
        
        //empty array declared
        const emptyArray = Array(width*width - bombAmount).fill('empty')

        //creating combined array emptyArray with bombArray
        const gameArray = emptyArray.concat(bombsArray)

        //shuffling array

        const shuffledArray = gameArray.sort(() => Math.random() - 0.5)
        
        for(let i = 0; i < width*width; i++) {
            const square = document.createElement('div')
            //creating separate id for each item
            square.setAttribute('id', i)
            //appending to the grid
            grid.appendChild(square)
            squares.push(square)
            squares[i].classList.add('grid-small')
            squares[i].classList.add(shuffledArray[i])

                for (let i = 0; i < squares.length; i++ ) {
                    //is it max on the left?
                    const isLeftEdge = i % width === 0 
                    //is it on the right?
                    const isRightEdge = i % width === width -1 
                }

                // if this square is not a bomb
                if (squares[i].classList.contains('empty')) {
                    //we start with no bombs
                    total = 0 
                    // if it is not 0 and not on left edge
                    //and the square on the left contains bomb 
                    if (i > 0 && !isLeftEdge && squares[i -1].classList.contains('bomb')) {
                        
                        //add 1 to total                        
                        total++
                    }

                }
            }

        }
        createBoard()
    })
