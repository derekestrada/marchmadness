async function test() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    function setNumbers() {

        // Set Numbers 
        let winners = [4,7,3,8,5,6,9,1,2,0];
        let losers = [3,7,4,6,5,0,9,8,1,2];

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
                "name": "Stacy Cazabon"
            },
            {
                "square": 1,
                "name": "Dennis Estrada"
            },
            {
                "square": 2,
                "name": "Dennis / Kathy (Steff)"
            },
            {
                "square": 3,
                "name": "Matt Reising"
            },
            {
                "square": 4,
                "name": "Brandon Paladino"
            },
            {
                "square": 5,
                "name": "Mike Moorhous"
            },
            {
                "square": 6,
                "name": "Chris Estrada"
            },
            {
                "square": 7,
                "name": "Dave Schneider"
            },
            {
                "square": 8,
                "name": "Tj Clacher"
            },
            {
                "square": 9,
                "name": "Steff Kleine"
            },
            {
                "square": 10,
                "name": "Tj Clacher"
            },
            {
                "square": 11,
                "name": "Mary Estrada"
            },
            {
                "square": 12,
                "name": "Steve Spickard"
            },
            {
                "square": 13,
                "name": "Greg Rossi"
            },
            {
                "square": 14,
                "name": "Allison Kennedy"
            },
            {
                "square": 15,
                "name": "Craig Konieczka"
            },
            {
                "square": 16,
                "name": "Dennis Estrada"
            },
            {
                "square": 17,
                "name": "Greg Rossi"
            },
            {
                "square": 18,
                "name": "Ryan Hunt"
            },
            {
                "square": 19,
                "name": "Travis (Bob)"
            },
            {
                "square": 20,
                "name": "Brandon Paladino"
            },
            {
                "square": 21,
                "name": "Derek Estrada"
            },
            {
                "square": 22,
                "name": "Mike Stevens"
            },
            {
                "square": 23,
                "name": "Rich Kremer"
            },
            {
                "square": 24,
                "name": "Steve Bahr"
            },
            {
                "square": 25,
                "name": "Mike Thayer"
            },
            {
                "square": 26,
                "name": "Paul Arthur"
            },
            {
                "square": 27,
                "name": "Allison Kennedy"
            },
            {
                "square": 28,
                "name": "Dennis Estrada"
            },
            {
                "square": 29,
                "name": "Kyle House"
            },
            {
                "square": 30,
                "name": "Hafer (Bob)"
            },
            {
                "square": 31,
                "name": "Craig Konieczka"
            },
            {
                "square": 32,
                "name": "Mike Stevens"
            },
            {
                "square": 33,
                "name": "Steff Kleine"
            },
            {
                "square": 34,
                "name": "AA (Bob)"
            },
            {
                "square": 35,
                "name": "Denny Estrada"
            },
            {
                "square": 36,
                "name": "Tom Cazabon"
            },
            {
                "square": 37,
                "name": "Bart Paladino"
            },
            {
                "square": 38,
                "name": "Derek Estrada"
            },
            {
                "square": 39,
                "name": "Mandi Gauthier"
            },
            {
                "square": 40,
                "name": "Bailey (Bob)"
            },
            {
                "square": 41,
                "name": "Steve Bahr"
            },
            {
                "square": 42,
                "name": "Mike Stevens"
            },
            {
                "square": 43,
                "name": "Kurtis Emme"
            },
            {
                "square": 44,
                "name": "Bob Kleine"
            },
            {
                "square": 45,
                "name": "Greg Rossi"
            },
            {
                "square": 46,
                "name": "Bill Kritzman"
            },
            {
                "square": 47,
                "name": "Matt Reising"
            },
            {
                "square": 48,
                "name": "Scott Gauthier"
            },
            {
                "square": 49,
                "name": "Pam Arthur"
            },
            {
                "square": 50,
                "name": "Dennis Estrada"
            },
            {
                "square": 51,
                "name": "Ryan Hunt"
            },
            {
                "square": 52,
                "name": "Mike Stevens"
            },
            {
                "square": 53,
                "name": "Paul Arthur"
            },
            {
                "square": 54,
                "name": "Scott Cazabon"
            },
            {
                "square": 55,
                "name": "Chris Estrada"
            },
            {
                "square": 56,
                "name": "Joel A"
            },
            {
                "square": 57,
                "name": "Steve Bahr"
            },
            {
                "square": 58,
                "name": "Hafer (Bob)"
            },
            {
                "square": 59,
                "name": "Mary Estrada"
            },
            {
                "square": 60,
                "name": "Shreve (Bob)"
            },
            {
                "square": 61,
                "name": "Dave Schneider"
            },
            {
                "square": 62,
                "name": "Derek Estrada"
            },
            {
                "square": 63,
                "name": "Ben Yowell"
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
                "name": "Kurtis Emme"
            },
            {
                "square": 67,
                "name": "Dennis Estrada"
            },
            {
                "square": 68,
                "name": "Lyle Tolfree"
            },
            {
                "square": 69,
                "name": "Chris Estrada"
            },
            {
                "square": 70,
                "name": "Ryan Hunt"
            },
            {
                "square": 71,
                "name": "Paul Arthur"
            },
            {
                "square": 72,
                "name": "Greg Rossi"
            },
            {
                "square": 73,
                "name": "Craig Konieczka"
            },
            {
                "square": 74,
                "name": "Matt Gauthier"
            },
            {
                "square": 75,
                "name": "Matt Gauthier"
            },
            {
                "square": 76,
                "name": "AA (Bob)"
            },
            {
                "square": 77,
                "name": "Denny Estrada"
            },
            {
                "square": 78,
                "name": "Liz Estrada"
            },
            {
                "square": 79,
                "name": "Dennis Estrada"
            },
            {
                "square": 80,
                "name": "Bob Kleine"
            },
            {
                "square": 81,
                "name": "Chris Estrada"
            },
            {
                "square": 82,
                "name": "Steve Bahr"
            },
            {
                "square": 83,
                "name": "Dennis Estrada"
            },
            {
                "square": 84,
                "name": "Bill Kritzman"
            },
            {
                "square": 85,
                "name": "Stacy Cazabon"
            },
            {
                "square": 86,
                "name": "Shreve (Bob)"
            },
            {
                "square": 87,
                "name": "Mike Thayer"
            },
            {
                "square": 88,
                "name": "Denny Estrada"
            },
            {
                "square": 89,
                "name": "Bob/Derek"
            },
            {
                "square": 90,
                "name": "Travis (Bob)"
            },
            {
                "square": 91,
                "name": "Kyle House"
            },
            {
                "square": 92,
                "name": "Kelley Phillips"
            },
            {
                "square": 93,
                "name": "Paul Arthur"
            },
            {
                "square": 94,
                "name": "Liz Estrada"
            },
            {
                "square": 95,
                "name": "Dennis Estrada"
            },
            {
                "square": 96,
                "name": "Derek Estrada"
            },
            {
                "square": 97,
                "name": "Mandi Gauthier"
            },
            {
                "square": 98,
                "name": "Craig Konieczka"
            },
            {
                "square": 99,
                "name": "Troy (Bob)"
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
  
 
