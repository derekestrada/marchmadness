import React from 'react'
import { FaRegCaretSquareUp } from 'react-icons/fa'
import { FaTrophy } from 'react-icons/fa'
import { FaListOl } from 'react-icons/fa'
import { FaBasketballBall } from 'react-icons/fa'
import './MobileHeader.css';



function MobileHeader() {

  async function test() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const results = document.getElementById('resultsContainer');
    const recent = document.getElementById('recentContainer');
    const winners = document.getElementById('myWinnerContainer');
    const sidebar = document.getElementById('sidebar');
    const subhead = document.getElementById('subhead');
    const mainContainer = document.getElementById('mainContainer');
    const app = document.getElementById('App');

    const mobResults = document.getElementById('mobileResults');
    const mobRecent = document.getElementById('mobileWinners');
    const mobWinner = document.getElementById('mobileLeaderboard');
    const mobApp = document.getElementById('mobileSquares');

    function handleResults() {
      results.style.display = "block"
      winners.style.display = "none"
      mainContainer.style.display = "none"
      subhead.style.display = "none"
      sidebar.style.display = "none"
      recent.style.display = "none"
      app.style.display = "none"
      mainContainer.style.display = "block"
      subhead.style.display = "block"
    }
    function handleWinners() {
      results.style.display = "none"
      winners.style.display = "block"
      mainContainer.style.display = "none"
      subhead.style.display = "none"
      recent.style.display = "block"
      sidebar.style.display = "none"
      app.style.display = "none"
      mainContainer.style.display = "none"
      subhead.style.display = "none"
    }

    function handleLeaders() {
      winners.style.display = "none"
      results.style.display = "none"
      mainContainer.style.display = "none"
      subhead.style.display = "none"
      sidebar.style.display = "block"
      recent.style.display = "none"
      app.style.display = "none"
      mainContainer.style.display = "none"
      subhead.style.display = "none"
  
    }
    function handleSquares() {
      winners.style.display = "none"
      results.style.display = "none"
      mainContainer.style.display = "none"
      subhead.style.display = "none"
      sidebar.style.display = "none"
      recent.style.display = "none"
      app.style.display = "flex"
      mainContainer.style.display = "none"
      subhead.style.display = "none"
    }

    mobResults.onclick = () => {
      handleResults()
    }
    mobRecent.onclick = () => {
      handleWinners()
    }
    mobWinner.onclick = () => {
      handleLeaders()
    }
    mobApp.onclick = () => {
      handleSquares()
    }
  }
  test();


  return (
    <div className='mobileHeader'>
        <div id="mobileResults"><FaBasketballBall  size={20}/><p>Results</p></div>
        <div id="mobileWinners"><FaTrophy size={20} /><p>Winners</p></div>
        <div id="mobileLeaderboard"><FaListOl  size={20}/><p>Leaderboard</p></div>
        <div id="mobileSquares"><FaRegCaretSquareUp  size={20}/><p>Squares</p></div>
    </div>
  )
}


export default MobileHeader