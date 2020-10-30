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

        //bombs array declared
        const bombsArray = Array(bombAmount).fill('bomb')
        
        //empty array declared
        const emptyArray = Array(width*width - bombAmount).fill('empty')

        //creating combined array
        const gameArray = emptyArray.concat(bombsArray, emptyArray)

        //shuffling array

        const shuffledArray = gameArray.sort(() => Math.random() -0.5)

        console.log(shuffledArray)
        
        for(let i = 0; i < width*width; i++) {
            const square = document.createElement('div')
            //creating separate id for each item
            square.setAttribute('id', i)
            //appending to the grid
            grid.appendChild(square)
            squares.push(square)
            squares[i].classList.add('grid-small')
            squares[i].classList.add(shuffledArray[i])
        }      
    }

    createBoard()
}) 