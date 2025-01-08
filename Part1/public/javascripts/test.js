function displayLeft() {
    let displayLeft = document.getElementById("displayLeft");

    const list = [1, 2, 3];
    let filtering = list.filter((item) => {
        return item % 2 === 0;
    });

    displayLeft.innerHTML = filtering;
}

async function displayRight(userObject) {
    const displayRight = document.getElementById("displayRight");

    displayRight.innerHTML = "yiss";
}
