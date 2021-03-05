console.clear()

let canvas
let context

function getMouseLocation(event)
{
    console.log(event)
    
    const offset = canvas.getBoundingClientRect()
    console.log(offset)
   
    const style = window.getComputedStyle(canvas)   
    
    const position = {
        x: event.clientX - offset.left - parseInt(style.borderLeftWidth),
        y: event.clientY - offset.top - parseInt(style.borderTopWidth)
    }
    return position
}

function onClickCanvas(event)
{
    const location = getMouseLocation(event)
    const radius = getRandomInteger(10, 50)
    const color = getRandomColor()
    const disk = new Disk()
    
    disk.setPosition(location)
    disk.setRadius(radius)
    disk.setColor(color)
  
    disk.draw(context)
}

document.addEventListener("DOMContentLoaded", (event) => {

    canvas = document.getElementById("masterpiece")
    context = canvas.getContext('2d')
    canvas.addEventListener("click",onClickCanvas)

})