
function getRandomColor()
{
 
    const red = getRandomInteger(0, 255);
    const green = getRandomInteger(0, 255);
    const blue = getRandomInteger(0, 255);
    
    const opacity = Math.random();
  
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}

function getRandomInteger(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}