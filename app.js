//loading the entire web
document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid')

    let width = 10

    //squares being an empty array
    let squares = []; 

    let bombAmount = 10

    let isGameOver = false

    let flags = 0 

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
            
            square.oncontextmenu = function(e) {
                e.preventDefault()
                addFlag(square)
            }
        }

        //add numbers
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

                //is the item on up-left containing bomb?
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

        let currentId = square.id
        
        if (isGameOver) return 

        if (square.classList.contains('checked') || square.classList.contains('flag')) return

        //game over if bomb clicked on
        if (square.classList.contains('bomb')){
            gameOver(square)
        } else {

            //change color; display total
            let total = square.getAttribute('data') 
            
            if (total != 0 ) {
                square.classList.add('checked')
                square.innerHTML = total
                return
            }

            checkSquare(square, currentId) 

        }
        //total = 0 change color and uncover more squares
        square.classList.add('checked')

    }

    function checkSquare(square, currentId) {

        //checking the value of currentId
        const isRightEdge = (currentId % width === width - 1) 

        const isLeftEdge = (currentId % width === 0)

        //
        setTimeout(() => {
            //direct left
            if (currentId > 0 && !isLeftEdge) {
                const newId = squares[parseInt(currentId) -1].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }

            // right-up
            if (currentId > 9 && !isRightEdge) {
                const newId = squares[parseInt(currentId) +1 -width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            //direct up
            if (currentId > 10) {
                const newId = squares[parseInt(currentId) -width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            //up-left
            if (currentId > 11 && !isLeftEdge) {
                const newId = squares[parseInt(currentId) -1-width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }

            //direct right
            if (currentId > 0 && !isRightEdge) {
                const newId = squares[parseInt(currentId) +1].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
        
            //down-left
            if (currentId < 90 && !isLeftEdge) {
                const newId = squares[parseInt(currentId) -1 + width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }

            //down-right
            if (currentId < 88 && !isRightEdge) {
                const newId = squares[parseInt(currentId) +1 +width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }

            //direct down
            if (currentId < 89) {
                const newId = squares[parseInt(currentId) +width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }


            //10 milisecs
        }, 10)

    }

    function gameOver(square) {
        console.log('BOOM! Game Over')
        isGameOver = true

        //show all the bombs
        squares.forEach(square => {
            if (square.classList.contains('bomb')) {
                square.classList.add('death')
            }
        })
    }

    function addFlag(square) {
        if (isGameOver) return 
        if (!square.classList.contains('checked') && (flags < bombAmount)) {
            if (!square.classList.contains('flag')) {
                square.innerHTML = 'F'
                flags ++
                checkForWin()
            } else {
                square.classList.remove('flag')
                flags -- 
                square.innerHTML = ' '
            }
        }
    }

    //check for win 

    function checkForWin(){
        let matches = 0

        for (let i = 0; i < squares.length; i++ ) {
            if (squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')){
                matches++
            }

            if (matches === bombAmount) {
                console.log('YOU WIN')
                isGameOver = true
            }
        }
    }


})