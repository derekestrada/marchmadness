async function test() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  let LeaderboardArray = [];
let dateRange = [
  {date: 20250320, value: 10}, 
  {date: 20250321, value: 10}, 
  {date: 20250322, value: 25}, 
  {date: 20250323, value: 25},
  {date: 20250327, value: 50},
  {date: 20250328, value: 50}, 
  {date: 20250329, value: 100}, 
  {date: 20250330, value: 100}, 
  {date: 20250405, value: 250},
  {date: 20250407, value: 480},
];
let resultsContainer = document.getElementById('resultsContainer');

// Build Recent Winners 
let recentContainer = document.getElementById("recentContainer");
let gameFinal = document.createElement("div");
gameFinal.classList.add("Results", "Winners");
gameFinal.setAttribute("id", "recentWinners");
recentContainer.append(gameFinal);

// Build My Winners 
let winnerContainer = document.getElementById("myWinnerContainer");
let winnerFinal = document.createElement("div");
winnerFinal.classList.add("Results", "MyWinners");
winnerFinal.setAttribute("id", "myWinnings");
winnerContainer.append(winnerFinal);

dateRange.forEach(function(e, key){
  let date = new Date()
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth()+1).padStart(2, "0");
  let year = date.getFullYear();
  let todaysDate = parseInt(year + month + day);

  let newResults = document.createElement("div");
  newResults.classList.add("Results");
  (todaysDate === e.date) ? newResults.classList.add("today") : null;

  newResults.setAttribute("id", e.date);
  newResults.setAttribute("value", e.value);
  resultsContainer.appendChild(newResults);
});

function winnerSquare(winnerNumber, loserNumber, eventWorth, winnerData) {
  let losers = [3,7,6,8,0,4,5,2,1,9];
  let winnerRow = document.querySelectorAll("td[data-winnum='" + winnerNumber + "']");

  for(let j = 0; j < losers.length; j++) {
    if (losers[j] === parseInt(loserNumber)) {
      let loserInt = j + 1;
      let winnerSquare = (winnerRow[loserInt].innerHTML);
      recentWinner(winnerSquare, winnerData, eventWorth);
      let winnerAmount = eventWorth;
      let obj = {name: winnerSquare, winnings: winnerAmount};

      if (LeaderboardArray.length < 1) {
        LeaderboardArray.push(obj);
      } else {
        // eslint-disable-next-line
        function addWinnings() {
          let nIndex = LeaderboardArray.map(function(o) { return o.name; }).indexOf(winnerSquare);
          let n = LeaderboardArray[nIndex].winnings;
          LeaderboardArray[nIndex].winnings = n+winnerAmount;
        }
        let index = LeaderboardArray.findIndex(x => x.name === winnerSquare);
        index === -1 ? LeaderboardArray.push(obj) : addWinnings();
      }
      
      let leaderList = document.getElementById('leaderboard');
      leaderList.innerHTML = '';
      LeaderboardArray.sort((a, b) => b.winnings - a.winnings)

      for (let i=0; i < LeaderboardArray.length; i++) {
        let name = LeaderboardArray[i].name;
        let totalWinnings = LeaderboardArray[i].winnings;
        let listItem = document.createElement("li");
        listItem.innerHTML = `<span>${name}</span><span>$${totalWinnings}</span>`
        leaderList.appendChild(listItem);
      }
    }
  }

  
  function recentWinner(winnerSquare, winnerData, eventWorth) {
    let recentWinners = document.getElementById("recentWinners");
    let event = document.createElement("div");
    event.classList.add('event');
    event.setAttribute("data-winner", winnerSquare);
    let winnerDetails = `<div className=""><ul><li><span class="logo"><img src="${winnerData[2]}"/></span><span class="team">${winnerData[0]}</span><span class="score">${winnerData[4]}</span></li><li><span class="logo"><img src="${winnerData[3]}"/></span><span class="team">${winnerData[1]}</span><span class="score">${winnerData[5]}</span></li></ul></div><h3 class="blob">${winnerSquare} - $${eventWorth}</h3>`;
    event.innerHTML = winnerDetails;
    recentWinners.appendChild(event);
  };
};

function retrieveData() {
  function myData(data, eventWorth) {
    const loader = document.getElementById("loader");
    loader.style.display = 'none';

    console.log(data, data.day.date)
    let dataDate = data.day.date;
    let finalDate = dataDate.replace(/-/g, '');
    let results = document.getElementById(finalDate);
    results.innerHTML = '';

    data.events.forEach(function(e) {
      // console.log(e);
      let startTime = new Date(e.competitions[0].startDate).toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
      let awayTeam = e.competitions[0].competitors[1].team.shortDisplayName;
      let homeTeam = e.competitions[0].competitors[0].team.shortDisplayName;
      let awayLogo = e.competitions[0].competitors[1].team.logo;
      let homeLogo = e.competitions[0].competitors[0].team.logo;
      let awayRank = e.competitions[0].competitors[1].curatedRank.current;
      let homeRank = e.competitions[0].competitors[0].curatedRank.current;
      let eventStatus = e.status.type.name;
      let gameCast = e.links[0].href;

      let event = document.createElement("div");
      event.classList.add('event');
      event.setAttribute("id", gameCast);
      results.appendChild(event);

      let broadcastLength = e.competitions[0].geoBroadcasts.length;
      if (broadcastLength > 0) {
        let carrier = e.competitions[0].geoBroadcasts[0].media.shortName;
        let eventDetails = `<div class="scoreTitle"><div class="gameTime"><span class="startTime">${startTime}</span> - ${carrier}</div><div class="scores"><span>1</span><span>2</span><span class="final">T</span></div></div><ul><li><img src="${awayLogo}"/><span class="rank">${awayRank}</span>${awayTeam}</li><li><img src="${homeLogo}"/><span class="rank">${homeRank}</span>${homeTeam}</li></ul>`;
        event.innerHTML = eventDetails;
      } else {
        let eventDetails = `<div class="scoreTitle"><div class="gameTime"><span class="startTime">${startTime}</span></div><div class="scores"><span>1</span><span>2</span><span class="final">T</span></div></div><ul><li><img src="${awayLogo}"/><span class="rank">${awayRank}</span>${awayTeam}</li><li><img src="${homeLogo}"/><span class="rank">${homeRank}</span>${homeTeam}</li></ul>`;
        event.innerHTML = eventDetails;
      }
      if (eventStatus === "STATUS_IN_PROGRESS" || eventStatus === "STATUS_HALFTIME" || eventStatus === "STATUS_FINAL")  {
        let eventClock = e.status.type.detail;
        let eventHalf = e.status.period;
        let awayFirstHalf = e.competitions[0].competitors[1].linescores[0].value;
        let homeFirstHalf = e.competitions[0].competitors[0].linescores[0].value;

        if (eventHalf === 1) {
          let eventDetails = `<div class="scoreTitle"><div class="gameTime"><span class="startTime">${eventClock}</span></div><div class="scores"><span>1</span><span>2</span><span class="final">T</span></div></div><ul><li class="inProgress"><div class="teamInfo"><img src="${awayLogo}"/><span class="rank">${awayRank}</span>${awayTeam}</div><div class="teamScore"><span>${awayFirstHalf}</span><span></span><span class="totalScore">${awayFirstHalf}</span></div></li><li class="inProgress"><div class="teamInfo"><img src="${homeLogo}"/><span class="rank">${homeRank}</span>${homeTeam}</div><div class="teamScore"><span>${homeFirstHalf}</span><span></span><span class="totalScore">${homeFirstHalf}</span></div></li></ul>`;
          event.innerHTML = eventDetails;
        } else if (eventHalf === 2) {
          let awaySecondHalf = e.competitions[0].competitors[1].linescores[1].value;
          let homeSecondHalf = e.competitions[0].competitors[0].linescores[1].value;
          let awayTotal = e.competitions[0].competitors[1].score;
          let homeTotal = e.competitions[0].competitors[0].score;
          let eventDetails = `<div class="scoreTitle"><div class="gameTime"><span class="startTime">${eventClock}</span></div><div class="scores"><span>1</span><span>2</span><span class="final">T</span></div></div><ul><li class="inProgress"><div class="teamInfo"><img src="${awayLogo}"/><span class="rank">${awayRank}</span>${awayTeam}</div><div class="teamScore"><span>${awayFirstHalf}</span><span>${awaySecondHalf}</span><span class="totalScore">${awayTotal}</span></div></li><li class="inProgress"><div class="teamInfo"><img src="${homeLogo}"/><span class="rank">${homeRank}</span>${homeTeam}</div><div class="teamScore"><span>${homeFirstHalf}</span><span>${homeSecondHalf}</span><span class="totalScore">${homeTotal}</span></div></li></ul>`;
          event.innerHTML = eventDetails;
        } else if (eventHalf === 3) {
          let awaySecondHalf = e.competitions[0].competitors[1].linescores[1].value;
          let homeSecondHalf = e.competitions[0].competitors[0].linescores[1].value;
          let awayOT = e.competitions[0].competitors[1].linescores[2].value;
          let homeOT = e.competitions[0].competitors[0].linescores[2].value;
          let awayTotal = e.competitions[0].competitors[1].score;
          let homeTotal = e.competitions[0].competitors[0].score;
          let eventDetails = `<div class="scoreTitle"><div class="gameTime"><span class="startTime">${eventClock}</span></div><div class="scores"><span>1</span><span>2</span><span>OT</span><span class="final">T</span></div></div><ul><li class="inProgress"><div class="teamInfo"><img src="${awayLogo}"/><span class="rank">${awayRank}</span>${awayTeam}</div><div class="teamScore"><span>${awayFirstHalf}</span><span>${awaySecondHalf}</span><span>${awayOT}</span><span class="totalScore">${awayTotal}</span></div></li><li class="inProgress"><div class="teamInfo"><img src="${homeLogo}"/><span class="rank">${homeRank}</span>${homeTeam}</div><div class="teamScore"><span>${homeFirstHalf}</span><span>${homeSecondHalf}</span><span>${homeOT}</span><span class="totalScore">${homeTotal}</span></div></li></ul>`;
          event.innerHTML = eventDetails;
        }
      }
      if (eventStatus === "STATUS_FINAL")  {
        let awayTotal = e.competitions[0].competitors[1].score;
        let homeTotal = e.competitions[0].competitors[0].score;
        let winnerData = [awayTeam, homeTeam, awayLogo, homeLogo, awayTotal, homeTotal];
        if (awayTotal < homeTotal) {
          let winnerNumber = homeTotal.substring(homeTotal.length - 1);
          let loserNumber = awayTotal.substring(awayTotal.length - 1);
          winnerSquare(winnerNumber, loserNumber, eventWorth, winnerData);
        } else {
          let loserNumber = homeTotal.substr(homeTotal.length - 1);
          let winnerNumber = awayTotal.substr(awayTotal.length - 1);
          winnerSquare(winnerNumber, loserNumber, eventWorth, winnerData);
        }
      }
      const button = document.getElementsByClassName("event");
      for (let i=0; i < button.length; i++) {
        button[i].addEventListener("click", (event) => {
          let buttonID = button[i].id;
          window.location.href = buttonID;
        });
      }
    });
    hideRank();
  }

  let url = 'https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?dates='
  dateRange.forEach(function(e){
    let eventWorth = e.value;
    let finalUrl = url+e.date+"&group=0";
    fetch(finalUrl)
    .then(response => response.json())
    .then(data => myData(data, eventWorth));
  });
}

function hideRank() {
  let allRanks = document.getElementsByClassName('rank');
  for (let i = 0; i < allRanks.length; i++) {
    let teamRank = parseInt(allRanks[i].innerHTML);
    if (teamRank > 25) {
      allRanks[i].innerHTML = "";
    }
  }
}

// retrieveData();

function fn60sec() {
  LeaderboardArray = [];
  retrieveData()
}
fn60sec();
setInterval(fn60sec, 60*1000);
}

test();

