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
          let selectedName = input.value;
          let matchSquare = document.querySelectorAll("td:not(.locked)");
          matchSquare.forEach((e) => {
            const innerStr = e.innerText.toString();
            if (innerStr === selectedName) {
              let winNum = e.dataset.winnum;
              let loseNum = e.dataset.losenum;
              let listSquares = `<li><span>${winNum}</span><span>${loseNum}</span></li>`;
              mySquares.innerHTML += listSquares;
            }
          });
          myWinners(selectedName);
      });
  });

  function myWinners(selectedName) {
  
    const myWinnerContainer = document.getElementById("myWinnings");
    myWinnerContainer.innerHTML = ""
    const winningEvents = document.querySelectorAll('.Winners .event');

    winningEvents.forEach(function(e) {
      let eventWinners = e.dataset.winner;
      const winStr = eventWinners.toString();
      if (winStr === selectedName) {
        myWinnerContainer.append(e);
      }
    });

    const myWinnerEvents = document.querySelectorAll(".MyWinners .event");
    if (myWinnerEvents.length === 0) {
      let noWinnings = document.createElement("div");
      noWinnings.classList.add("noWinnings");
      noWinnings.innerHTML = `<h3>Selected User Has Not Won</h3>`
      myWinnerContainer.append(noWinnings);
    }
    
  }

  const appButton = document.getElementById("boardButton");
  const boardApp = document.getElementById("App");
  appButton.onclick  = () => {
    const buttonText = appButton.innerHTML;
    (buttonText === "Open Board") ? appButton.innerHTML= "Close Board" : appButton.innerHTML= "Open Board"
    boardApp.classList.toggle("active");
  };
}

test();