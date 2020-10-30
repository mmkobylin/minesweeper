console.log('test')

// making sure the content is first loaded
document.addEventListener('DOMContentLoaded', () => {

    //picking the grid class item and making it a variable
    const grid = document.querySelector('.grid')
    
    let width = 10
    let bombAmount = 20
    let squares = []
    
    //createBoard 
    function createBoard(){

        //randomise the bombs 

        const bombsArray = Array(bombAmount).fill('bomb')
        const emptyArray = Array(width*width - bombAmount).fill('empty')

        console.log(bombsArray)
        console.log(emptyArray)

        for(let i = 0; i < width*width; i++) {
            const square = document.createElement('div')
            //creating separate id for each item
            square.setAttribute('id', i)
            //appending to the grid
            grid.appendChild(square)
            squares.push(square)
            squares[i].classList.add('grid-small')

        }      
    }

    createBoard()
}) 