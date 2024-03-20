async function test() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    function setNumbers() {

        // Set Numbers 
        let winners = [0,9,7,2,6,4,1,3,8,5];
        let losers = [4,6,9,5,2,0,3,8,1,7];

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
                "name": "Derek Estrada"
            },
            {
                "square": 1,
                "name": "Lyle Tolfree"
            },
            {
                "square": 2,
                "name": "Chris Estrada"
            },
            {
                "square": 3,
                "name": "Kelsey Kleine"
            },
            {
                "square": 4,
                "name": "Scott Gauthier"
            },
            {
                "square": 5,
                "name": "Paul Arthur"
            },
            {
                "square": 6,
                "name": "Stephanie Kleine"
            },
            {
                "square": 7,
                "name": "Hafener (Bob)"
            },
            {
                "square": 8,
                "name": "Patrick McCloskey"
            },
            {
                "square": 9,
                "name": "Matt Gauthier"
            },
            {
                "square": 10,
                "name": "Tj Clacher"
            },
            {
                "square": 11,
                "name": "Ryan Hunt"
            },
            {
                "square": 12,
                "name": "Ashley Banahene"
            },
            {
                "square": 13,
                "name": "Pam Arthur"
            },
            {
                "square": 14,
                "name": "Hager (Bob)"
            },
            {
                "square": 15,
                "name": "Joe Slater"
            },
            {
                "square": 16,
                "name": "Becca Jaschuk"
            },
            {
                "square": 17,
                "name": "Steve Bahr"
            },
            {
                "square": 18,
                "name": "Derek Estrada"
            },
            {
                "square": 19,
                "name": "Travis (Bob)"
            },
            {
                "square": 20,
                "name": "Tj Clacher"
            },
            {
                "square": 21,
                "name": "Mike Moorhous"
            },
            {
                "square": 22,
                "name": "Brandon Paladino"
            },
            {
                "square": 23,
                "name": "Matt Reising"
            },
            {
                "square": 24,
                "name": "Rich Kremer"
            },
            {
                "square": 25,
                "name": "Scott Jaschuk"
            },
            {
                "square": 26,
                "name": "Kelsey Kleine"
            },
            {
                "square": 27,
                "name": "Ashley Banahene"
            },
            {
                "square": 28,
                "name": "Ryan Hunt"
            },
            {
                "square": 29,
                "name": "Matt Reising"
            },
            {
                "square": 30,
                "name": "Greg Rossi"
            },
            {
                "square": 31,
                "name": "Craig Konienczka"
            },
            {
                "square": 32,
                "name": "Steve Bahr"
            },
            {
                "square": 33,
                "name": "Tom Cazabon"
            },
            {
                "square": 34,
                "name": "Denny Estrada"
            },
            {
                "square": 35,
                "name": "Jeff R."
            },
            {
                "square": 36,
                "name": "Scott Jaschuk"
            },
            {
                "square": 37,
                "name": "Greg Rossi"
            },
            {
                "square": 38,
                "name": "Chris Estrada"
            },
            {
                "square": 39,
                "name": "Dennis Estrada"
            },
            {
                "square": 40,
                "name": "Matt Gauther"
            },
            {
                "square": 41,
                "name": "Jeff R."
            },
            {
                "square": 42,
                "name": "Troy (Bob)"
            },
            {
                "square": 43,
                "name": "Patrick McCloskey"
            },
            {
                "square": 44,
                "name": "Mike Thayer"
            },
            {
                "square": 45,
                "name": "Allison Kennedy"
            },
            {
                "square": 46,
                "name": "Liz Estrada"
            },
            {
                "square": 47,
                "name": "Denny Estrada"
            },
            {
                "square": 48,
                "name": "Matt Gauthier"
            },
            {
                "square": 49,
                "name": "Brent Mac (Bob)"
            },
            {
                "square": 50,
                "name": "Travis (Bob)"
            },
            {
                "square": 51,
                "name": "Mary Estrada"
            },
            {
                "square": 52,
                "name": "Gooder"
            },
            {
                "square": 53,
                "name": "Tom (Bob)"
            },
            {
                "square": 54,
                "name": "Brandon Paladino"
            },
            {
                "square": 55,
                "name": "Dennis Estrada"
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
                "name": "Bob Kleine"
            },
            {
                "square": 59,
                "name": "AA (Bob)"
            },
            {
                "square": 60,
                "name": "Chris Estrada"
            },
            {
                "square": 61,
                "name": "Hafener (Bob)"
            },
            {
                "square": 62,
                "name": "Dennis Estrada"
            },
            {
                "square": 63,
                "name": "Toby (Bob)"
            },
            {
                "square": 64,
                "name": "Pam Arthur"
            },
            {
                "square": 65,
                "name": "Ryan Hunt"
            },
            {
                "square": 66,
                "name": "Mike Moorhous"
            },
            {
                "square": 67,
                "name": "Gooder"
            },
            {
                "square": 68,
                "name": "Craig Konienczka"
            },
            {
                "square": 69,
                "name": "Steve Bahr"
            },
            {
                "square": 70,
                "name": "Brent Mac (Bob)"
            },
            {
                "square": 71,
                "name": "Joe Jaschuk"
            },
            {
                "square": 72,
                "name": "Matt (Bob)"
            },
            {
                "square": 73,
                "name": "Mel (Bob)"
            },
            {
                "square": 74,
                "name": "Steve Spickard"
            },
            {
                "square": 75,
                "name": "Mike Kennedy"
            },
            {
                "square": 76,
                "name": "Pete (Bob)"
            },
            {
                "square": 77,
                "name": "Dennis Estrada"
            },
            {
                "square": 78,
                "name": "Greg Rossi"
            },
            {
                "square": 79,
                "name": "Hager (Bob)"
            },
            {
                "square": 80,
                "name": "AA (Bob)"
            },
            {
                "square": 81,
                "name": "Liz Estrada"
            },
            {
                "square": 82,
                "name": "Mary Estrada"
            },
            {
                "square": 83,
                "name": "Steve Bahr"
            },
            {
                "square": 84,
                "name": "Keith Roberts"
            },
            {
                "square": 85,
                "name": "Steve Spickard"
            },
            {
                "square": 86,
                "name": "Scott Jaschuk"
            },
            {
                "square": 87,
                "name": "Scott Jaschuk"
            },
            {
                "square": 88,
                "name": "Paul Arthur"
            },
            {
                "square": 89,
                "name": "Greg Rossi"
            },
            {
                "square": 90,
                "name": "Ryan Hunt"
            },
            {
                "square": 91,
                "name": "Chris Marxen"
            },
            {
                "square": 92,
                "name": "Derek Estrada"
            },
            {
                "square": 93,
                "name": "Vicky (Bob)"
            },
            {
                "square": 94,
                "name": "Scott Jaschuk"
            },
            {
                "square": 95,
                "name": "Derek Estrada"
            },
            {
                "square": 96,
                "name": "Allison Kennedy"
            },
            {
                "square": 97,
                "name": "Matt Gauthier"
            },
            {
                "square": 98,
                "name": "Lyle Tolfree"
            },
            {
                "square": 99,
                "name": "Chris Estrada"
            },
           
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
  
 
