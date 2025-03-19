async function test() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    function setNumbers() {

        // Set Numbers 
        let winners = [1,2,8,4,7,6,3,9,0,5];
        let losers = [3,7,6,8,0,4,5,2,1,9];

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
        let takenSquares = [
            {
                "square": 0,
                "name": "Bret Bailey (Bob)"
            },
            {
                "square": 1,
                "name": "Denny Estrada"
            },
            {
                "square": 2,
                "name": "Ashley Banahene"
            },
            {
                "square": 3,
                "name": "Steff Kleine"
            },
            {
                "square": 4,
                "name": "Greg Rossi"
            },
            {
                "square": 5,
                "name": "Eric Larsen"
            },
            {
                "square": 6,
                "name": "Bob Kleine"
            },
            {
                "square": 7,
                "name": "Brent McClain"
            },
            {
                "square": 8,
                "name": "Patrick McCloskey"
            },
            {
                "square": 9,
                "name": "Troy Phillips (Bob)"
            },
            {
                "square": 10,
                "name": "Bob Kleine"
            },
            {
                "square": 11,
                "name": "Dennis Estrada"
            },
            {
                "square": 12,
                "name": "Andy Marxen"
            },
            {
                "square": 13,
                "name": "Steve Bahr"
            },
            {
                "square": 14,
                "name": "Mary Estrada"
            },
            {
                "square": 15,
                "name": "Mike Kennedy"
            },
            {
                "square": 16,
                "name": "Greg Rossi"
            },
            {
                "square": 17,
                "name": "Brandon Paladino"
            },
            {
                "square": 18,
                "name": "Chris Estrada"
            },
            {
                "square": 19,
                "name": "Eric Larsen"
            },
            {
                "square": 20,
                "name": "Tj Clacher"
            },
            {
                "square": 21,
                "name": "AA (Bob)"
            },
            {
                "square": 22,
                "name": "Becca Jaschuk"
            },
            {
                "square": 23,
                "name": "Allison Kennedy"
            },
            {
                "square": 24,
                "name": "Paul Arthur"
            },
            {
                "square": 25,
                "name": "Mary Estrada"
            },
            {
                "square": 26,
                "name": "Liz Estrada"
            },
            {
                "square": 27,
                "name": "Terry Shreve (Bob)"
            },
            {
                "square": 28,
                "name": "Dennis Estrada"
            },
            {
                "square": 29,
                "name": "Allison Kennedy"
            },
            {
                "square": 30,
                "name": "Derek Estrada"
            },
            {
                "square": 31,
                "name": "Steve Bahr"
            },
            {
                "square": 32,
                "name": "Matt Reising"
            },
            {
                "square": 33,
                "name": "Chris Estrada"
            },
            {
                "square": 34,
                "name": "Ben Yowell"
            },
            {
                "square": 35,
                "name": "Ben Yowell"
            },
            {
                "square": 36,
                "name": "Bethany Clacher"
            },
            {
                "square": 37,
                "name": "Scott Jaschuk"
            },
            {
                "square": 38,
                "name": "Ryan Hunt"
            },
            {
                "square": 39,
                "name": "Steve Bahr"
            },
            {
                "square": 40,
                "name": "Mike Moorhous"
            },
            {
                "square": 41,
                "name": "Mike Thayer"
            },
            {
                "square": 42,
                "name": "Emme / Estrada"
            },
            {
                "square": 43,
                "name": "Patrick McCloskey"
            },
            {
                "square": 44,
                "name": "Travis Shelton (Bob)"
            },
            {
                "square": 45,
                "name": "Gooder"
            },
            {
                "square": 46,
                "name": "Neil Keena"
            },
            {
                "square": 47,
                "name": "Cathleen Keena"
            },
            {
                "square": 48,
                "name": "Pam Arthur"
            },
            {
                "square": 49,
                "name": "Chris Marxen"
            },
            {
                "square": 50,
                "name": "Craig K."
            },
            {
                "square": 51,
                "name": "Paul Arthur"
            },
            {
                "square": 52,
                "name": "Ryan Hunt"
            },
            {
                "square": 53,
                "name": "Bryson Phillips"
            },
            {
                "square": 54,
                "name": "Gooder"
            },
            {
                "square": 55,
                "name": "Scott Gauthier"
            },
            {
                "square": 56,
                "name": "Joe Slater"
            },
            {
                "square": 57,
                "name": "Joe Jaschuk"
            },
            {
                "square": 58,
                "name": "Derek Estrada"
            },
            {
                "square": 59,
                "name": "Ernie Marxen"
            },
            {
                "square": 60,
                "name": "Steve Bahr"
            },
            {
                "square": 61,
                "name": "Chris Estrada"
            },
            {
                "square": 62,
                "name": "Emme / Estrada"
            },
            {
                "square": 63,
                "name": "Steve Bahr"
            },
            {
                "square": 64,
                "name": "Jeff R."
            },
            {
                "square": 65,
                "name": "Derek Estrada"
            },
            {
                "square": 66,
                "name": "Steve Spickard"
            },
            {
                "square": 67,
                "name": "Joel"
            },
            {
                "square": 68,
                "name": "Travis Shelton (Bob)"
            },
            {
                "square": 69,
                "name": "Chris Marxen"
            },
            {
                "square": 70,
                "name": "Chris Estrada"
            },
            {
                "square": 71,
                "name": "Greg Rossi"
            },
            {
                "square": 72,
                "name": "Tara Reising"
            },
            {
                "square": 73,
                "name": "Craig K."
            },
            {
                "square": 74,
                "name": "Ashley Civils"
            },
            {
                "square": 75,
                "name": "Matt Gauthier"
            },
            {
                "square": 76,
                "name": "Ryan Hunt"
            },
            {
                "square": 77,
                "name": "Andy Marxen"
            },
            {
                "square": 78,
                "name": "Chris Marxen"
            },
            {
                "square": 79,
                "name": "Ashley Banahene"
            },
            {
                "square": 80,
                "name": "Eric Larsen"
            },
            {
                "square": 81,
                "name": "Allison Kennedy"
            },
            {
                "square": 82,
                "name": "Terry Shreve (Bob)"
            },
            {
                "square": 83,
                "name": "Pam Arthur"
            },
            {
                "square": 84,
                "name": "Matt Gauthier"
            },
            {
                "square": 85,
                "name": "Steve Bahr"
            },
            {
                "square": 86,
                "name": "Ernie Marxen"
            },
            {
                "square": 87,
                "name": "Dennis Estrada"
            },
            {
                "square": 88,
                "name": "Derek Estrada"
            },
            {
                "square": 89,
                "name": "Tyler Emme"
            },
            {
                "square": 90,
                "name": "Jason Hafer (Bob)"
            },
            {
                "square": 91,
                "name": "Jason Hafer (Bob)"
            },
            {
                "square": 92,
                "name": "Brent McClain"
            },
            {
                "square": 93,
                "name": "Jim Henris"
            },
            {
                "square": 94,
                "name": "AA (Bob)"
            },
            {
                "square": 95,
                "name": "Denise Henris"
            },
            {
                "square": 96,
                "name": "Bret Bailey (Bob)"
            },
            {
                "square": 97,
                "name": "Greg Rossi"
            },
            {
                "square": 98,
                "name": "Denny Estrada"
            },
            {
                "square": 99,
                "name": "Dennis Estrada"
            } 
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
  
 
