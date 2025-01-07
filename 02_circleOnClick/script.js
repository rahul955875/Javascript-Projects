let count = 0;
const clientCor = []
function isIntersecting(){
    // circle1 = 
}
document.addEventListener('click',(e)=>{    
    if(count>1 && document.querySelector('.circle')){
        document.querySelector('.circle').remove()
        clientCor.shift()
    }
    const circle = document.createElement('div')
    circle.classList.add('circle')
    const x = e.clientX
    const y = e.clientY
    clientCor.push({x,y})
    circle.style.setProperty('--x',x +'px')
    circle.style.setProperty('--y',y +'px')
    let circleWidth = Math.random()*100
    circle.style.setProperty('--width',circleWidth+'px')
    document.body.append(circle)
count++ 
    console.log(clientCor)
})