let canvas = document.querySelector("canvas")
let context = canvas.getContext("2d")

const BLOCK_SIZE = 20
const  BLOAD_WIDTH = 14
const  BLOAD_HEIGTH = 30

canvas.width = BLOCK_SIZE* BLOAD_WIDTH
canvas.height = BLOCK_SIZE * BLOAD_HEIGTH
context.scale(BLOCK_SIZE,BLOCK_SIZE)


const piece = {
    position:{x:5,y:5},
    shape:[[0,0],[0,1]]
}

const PIECES =[
    [
        [1,0],
        [0,0]
    ],
    [
        [1,1,1,1]
    ],
    [
        [0,1,0],
        [1,1,1]
    ],
    [
        [1,1,0],
        [0,1,1]
    ],
    [
        [1,0],
        [1,0],
        [1,1]
    ]
]
const board =createBoard(BLOAD_WIDTH,BLOAD_HEIGTH)

function createBoard (withd,height){
    return Array(height).fill().map(()=> Array(withd).fill(0))
}
let dropCounter =0

let lastTime=0
function update (time=0){

    const dataTime = time- lastTime
    lastTime =time
    dropCounter += dataTime
    if(dropCounter >1000){
        piece.position.y++
        dropCounter =0
        if(checkCollision()){
            piece.position.y--
            solidifyPiece()
            removeRows()
        }
    }
    draw()

    window.requestAnimationFrame(update)


}



function draw(){
    context.fillStyle="#000"

    context.fillRect(0, 0, canvas.width, canvas.height)
    board.forEach((row, y) =>{
        row.forEach((value,x)=>{
            if(value === 1){
                context.fillStyle = "yellow"
                context.fillRect(x,y,1,1)

            }
        })
    })

    piece.shape.forEach((row, y) =>{
        row.forEach((value,x)=>{
            if(value === 1){
                context.fillStyle = "red"
                context.fillRect(x+piece.position.x,y+piece.position.y,1,1)

            }
        })
    })
}

console.log(piece)

document.addEventListener("keydown",event =>{

    if(event.key === "ArrowLeft"){
        piece.position.x--
        if(checkCollision()){
            piece.position.x++
        }
    } 
    if(event.key === "ArrowRight") {
        piece.position.x++
            if(checkCollision()){
                piece.position.x--
            }
        
    }
    if(event.key === "ArrowDown") {

        piece.position.y++
        if(checkCollision()){
            piece.position.y--
            solidifyPiece()
            removeRows()
        }
    }
    if(event.key === "ArrowUp") {

        const rotate = []
        for(let i = 0; i< piece.shape[0].length; i++){
            const rows = []

            for(let j =piece.shape.length -1;j >=0; j-- ){
            rows.push(piece.shape[j][i])
        }
        
        console.log(rows)
        rotate.push(rows)

        }
       const previwShep = piece.shape 
        piece.shape = rotate
        if(checkCollision()){
         piece.shape = previwShep

        }
    }

})

function checkCollision(){

    return piece.shape.find((rows,y)=>{
        return  rows.find((value,x)=>{
            return (
            value !==0 && 
            board[y+ piece.position.y]?.[x+ piece.position.x] !==0
            )
        })
    })
  

}

function solidifyPiece(){
    
    piece.shape.forEach((row, y) =>{
        row.forEach((value,x)=>{
            if(value === 1){
               board[y+piece.position.y][x+piece.position.x]=1

            }
        })
    })
    piece.position.x = Math.floor(BLOAD_WIDTH/2-2)
    piece.position.y =0
    piece.shape = PIECES[Math.floor(Math.random()* PIECES.length)]

    if(checkCollision()){
        window.alert("perdise")
        board.forEach(rows =>rows.fill(0))
    }

}

function removeRows(){

    const rowsToRemove=[]
    board.forEach((row, y) =>{
       if(row.every(value => value===1)){
        rowsToRemove.push(y)

       }
    })

    rowsToRemove.forEach(y=>{
        board.splice(y,1)
        const newArray = Array(BLOAD_WIDTH).fill(0)
        board.unshift(newArray)
    })
}
update()

