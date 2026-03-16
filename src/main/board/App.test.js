async function test() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    function setNumbers() {

        // Set Numbers 
        let winners = [6,3,4,0,7,8,1,9,2,5];
        let losers = [2,5,1,3,8,0,4,9,7,6];

        const winRow = document.getElementById("winningNumbers");
        const winnerNums = winRow.querySelectorAll("td:not(.blank)");
        winnerNums.forEach(function(e, i) {
            e.innerHTML = winners[i];
            e.setAttribute("data-winNum", winners[i]);
        })

        const loseCol = document.getElementById("loseCon");
        const loseNums = loseCol.querySelectorAll("td.locked");
        loseNums.forEach(function(e, i) {
            e.innerHTML = losers[i];
            e.setAttribute("data-loseNum", losers[i]);
        })

        const setData = document.querySelectorAll(".squareRow:not(.locked)");
        setData.forEach(function(e, key) {
            const setLose =  e.querySelectorAll('td.locked');
            const pullLoser = setLose[0].innerHTML;
            const setWin = e.querySelectorAll('td:not(.locked');
            setWin.forEach(function(e, key) {
                e.setAttribute('data-winNum', winners[key]);
                e.setAttribute('data-loseNum', pullLoser);
    
            })
        });

    }
    
    function assignSquares() {
        let takenSquares = 
        [
          { "square": 1, "name": "Chris Estrada" },
          { "square": 2, "name": "Matt Reising" },
          { "square": 3, "name": "Steff Kleine" },
          { "square": 4, "name": "Derek Estrada" },
          { "square": 5, "name": "Chris Marxen" },
          { "square": 6, "name": "Brandon Paladino" },
          { "square": 7, "name": "Ernie Marxen" },
          { "square": 8, "name": "Andy Marxen" },
          { "square": 9, "name": "Greg Rossi" },
          { "square": 10, "name": "Allison Kennedy" },
          { "square": 11, "name": "Dennis Estrada" },
          { "square": 12, "name": "Allison Kennedy" },
          { "square": 13, "name": "Ashley Banahene" },
          { "square": 14, "name": "Mike Moorhous" },
          { "square": 15, "name": "Craig Konienczka" },
          { "square": 16, "name": "Jason Hafer" },
          { "square": 17, "name": "Mary Estrada" },
          { "square": 18, "name": "Emme / Estrada" },
          { "square": 19, "name": "Emme / Estrada" },
          { "square": 20, "name": "Travis Shelton" },
          { "square": 21, "name": "Paul Arthur" },
          { "square": 22, "name": "Jake D" },
          { "square": 23, "name": "Matt Gauthier" },
          { "square": 24, "name": "Allison Kennedy" },
          { "square": 25, "name": "Mike Thayer" },
          { "square": 26, "name": "Becca Jaschuk" },
          { "square": 27, "name": "Tom Cazabon" },
          { "square": 28, "name": "Joe Slater" },
          { "square": 29, "name": "Steve Bahr" },
          { "square": 30, "name": "Tara Reising" },
          { "square": 31, "name": "Bob Kleine" },
          { "square": 32, "name": "Chris Estrada" },
          { "square": 33, "name": "Steve Bahr" },
          { "square": 34, "name": "Steve Spickard" },
          { "square": 35, "name": "Matt Gauthier" },
          { "square": 36, "name": "Liz Estrada" },
          { "square": 37, "name": "AA" },
          { "square": 38, "name": "Dennis Estrada" },
          { "square": 39, "name": "J May" },
          { "square": 40, "name": "Jason Hafer" },
          { "square": 41, "name": "Patrick McCloskey" },
          { "square": 42, "name": "Tj Clacher" },
          { "square": 43, "name": "Craig Konienczka" },
          { "square": 44, "name": "Scott Gauthier" },
          { "square": 45, "name": "Steff Kleine" },
          { "square": 46, "name": "Matt Gauthier" },
          { "square": 47, "name": "JSR" },
          { "square": 48, "name": "JSR" },
          { "square": 49, "name": "Paul Arthur" },
          { "square": 50, "name": "Emme / Estrada" },
          { "square": 51, "name": "Troy Phillips" },
          { "square": 52, "name": "Derek Estrada" },
          { "square": 53, "name": "Derek Estrada" },
          { "square": 54, "name": "Chris Estrada" },
          { "square": 55, "name": "Lyle Tolfree" },
          { "square": 56, "name": "Joe Slater" },
          { "square": 57, "name": "Craig Konienczka" },
          { "square": 58, "name": "Denny Estrada" },
          { "square": 59, "name": "Joe Jaschuk" },
          { "square": 60, "name": "Patrick McCloskey" },
          { "square": 61, "name": "Bryson Phillips" },
          { "square": 62, "name": "Tj Clacher" },
          { "square": 63, "name": "Dennis Estrada" },
          { "square": 64, "name": "Greg Rossi" },
          { "square": 65, "name": "Scott Jaschuk" },
          { "square": 66, "name": "Jake D" },
          { "square": 67, "name": "Lyle Tolfree" },
          { "square": 68, "name": "Mike Stevens" },
          { "square": 69, "name": "Brandon Paladino" },
          { "square": 70, "name": "Paul Arthur" },
          { "square": 71, "name": "Scott Jaschuk" },
          { "square": 72, "name": "Steve Bahr" },
          { "square": 73, "name": "Mary Estrada" },
          { "square": 74, "name": "Mike Stevens" },
          { "square": 75, "name": "Denny Estrada" },
          { "square": 76, "name": "Bob Kleine" },
          { "square": 77, "name": "Mike Moorhous" },
          { "square": 78, "name": "J May" },
          { "square": 79, "name": "Steve Spickard" },
          { "square": 80, "name": "Craig Konienczka" },
          { "square": 81, "name": "Jason Hafer" },
          { "square": 82, "name": "Greg Rossi" },
          { "square": 83, "name": "Ashley Banahene" },
          { "square": 84, "name": "Chris Marxen" },
          { "square": 85, "name": "Andy Marxen" },
          { "square": 86, "name": "Ernie Marxen" },
          { "square": 87, "name": "Scott Gauthier" },
          { "square": 88, "name": "Steve Bahr" },
          { "square": 89, "name": "Travis Shelton" },
          { "square": 90, "name": "Chris Estrada" },
          { "square": 91, "name": "Andy Marxen" },
          { "square": 92, "name": "Allison Kennedy" },
          { "square": 93, "name": "Emme / Estrada" },
          { "square": 94, "name": "Jason Hafer" },
          { "square": 95, "name": "Dennis Estrada" },
          { "square": 96, "name": "Derek Estrada" },
          { "square": 97, "name": "Paul Arthur" },
          { "square": 98, "name": "Chad Wotton" },
          { "square": 99, "name": "Chris Marxen" },
          { "square": 100, "name": "Greg Rossi" }
        ];
        let nameList = [];
        const boardID = document.getElementById('BoardID');
        const openSquares = boardID.querySelectorAll("td:not(.locked)");


        for (let c = 0; c < takenSquares.length; c++) {
            let squareName = takenSquares[c].name;
            nameList.push(squareName);
            openSquares[c].innerHTML = squareName;
        }
        let uniqueNames = [...new Set(nameList)];
        uniqueNames.sort();

        let options = document.getElementById('optionsContainer');
        uniqueNames.forEach(function(element) {
            if (element === "D") {
                let select = `<div class="option selected" id="selected"><label>${element}</label></div>`
                options.innerHTML += select;
                
            } else {
                let select = `<div class="option"><label>${element}</label></div>`
                options.innerHTML += select;
            }
        });
    }
    //   createBoard();
      setNumbers();
      assignSquares();
  }
  
  test();
  
 
