let canvas = document.querySelector("canvas")
let context = canvas.getContext("2d")


let colorsPieces = ["#FF0000","#00FF00","#0000FF","#FFFF00","#00FFFF","#FF00FF","#C0C0C0"] 
const BLOCK_SIZE = 20
const  BLOAD_WIDTH = 14
const  BLOAD_HEIGTH = 30

canvas.width = BLOCK_SIZE* BLOAD_WIDTH
canvas.height = BLOCK_SIZE * BLOAD_HEIGTH
context.scale(BLOCK_SIZE,BLOCK_SIZE)

function newColor(){
    return colorsPieces[Math.floor(Math.random()* colorsPieces.length)]
}

let initialPuntos = 0
const piece = {
    position:{x:5,y:5},
    shape:[[0,0],[0,1]],
    color : newColor()
}

const PIECES =[
    [[1,0],[0,0]
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

    const dataTime = time- lastTime+initialPuntos
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
    // crear color fondo con cuadrilla 
    context.fillStyle = `rgba(0,0,0,0.8)`
    
    context.fillRect(0, 0, canvas.width, canvas.height)
    
    newColor()
    context.fillRect(0, 0, canvas.width, canvas.height)
     context.fillStyle = piece.color;
    board.forEach((row, y) =>{
        row.forEach((value,x)=>{
            if(value === 1){
               
                context.fillRect(x,y,1,1)

            }
        })
    })
    context.fillStyle = piece.color;
    piece.shape.forEach((row, y) =>{
        row.forEach((value,x)=>{
            if(value === 1){
                
                context.fillRect(x+piece.position.x,y+piece.position.y,1,1)

            }
        })
    })

      // Draw the grid
      context.strokeStyle = "gray";
      context.lineWidth = 0.05;
      
      for (let x = 0; x < canvas.width; x += 1) {
          context.beginPath();
          context.moveTo(x, 0);
          context.lineTo(x, canvas.height);
          context.stroke();
      }
  
      for (let y = 0; y < canvas.height; y += 1) {
          context.beginPath();
          context.moveTo(0, y);
          context.lineTo(canvas.width, y);
          context.stroke();
      }
  
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

    if(piece.position.x < 0){
        initialPuntos += 1
    }
    newColor()
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
const $start = document.querySelector(".start")

$start.addEventListener("click",()=>{

    $start.remove()

    let audio = new window.Audio("tetris.mp3")

    audio.volume = 0.1
    audio.loop = true
    audio.play()
})

particlesJS("particles-js", {"particles":{"number":{"value":400,"density":{"enable":true,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":10,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},"move":{"enable":true,"speed":6,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); };
 requestAnimationFrame(update);;