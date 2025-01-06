function testButton() {
    console.log("We working")
}


function displayLeft() {
    let displayLeft = document.getElementById("displayLeft");
    
    const list = [1,2,3]
    let sum = list.reduce( (counter, adder) => {return counter+= adder}, 0)
    let mapping = list.map( (item) => {return item*2})
    let filtering = list.filter( (item) => {return item % 2 === 0})

    displayLeft.innerHTML = filtering
}

function displayRight() {

    let displayRight = document.getElementById("displayRight");
    displayRight.innerHTML = "yiss"
}