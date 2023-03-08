async function test() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    let selectContainer = document.querySelector(".select-container");
    let select = document.querySelector(".select");
    let input = document.getElementById("input");
    let options = document.querySelectorAll(".select-container .option");

    select.onclick = () => {
        selectContainer.classList.toggle("active");
    };

    options.forEach((e) => {
        e.addEventListener("click", () => {
            input.value = e.innerText;
            selectContainer.classList.remove("active");
            options.forEach((e) => {
                e.classList.remove("selected");
            });
            e.classList.add("selected");
            let mySquares = document.getElementById("mySquares");
            mySquares.innerHTML = "";
            let selectedName = e.innerText;
            const boardID = document.getElementById('BoardID');
            const openSquares = boardID.querySelectorAll("td:not(.locked)");

            openSquares.forEach((e) => {
            const innerStr = e.innerText.toString();
            if (innerStr === input.value) {
                let winNum = e.dataset.winnum;
                let loseNum = e.dataset.losenum;
                let listSquares = `<li><span>${winNum}</span><span>${loseNum}</span></li>`;
                mySquares.innerHTML += listSquares;
            }
            })
        });
    });
}

test();