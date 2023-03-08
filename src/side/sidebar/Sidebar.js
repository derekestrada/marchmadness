import './Sidebar.css';
import './Sidebar.test.js';

function Sidebar() {

  return (
    <div className="Sidebar">
      <div className="payouts leaderboard">
        <h4>Payouts</h4>
        <div className='' data-title="Leaderboard">
          <ul id="payouts">
            <li><span>Round of 64</span><span>$10</span></li>
            <li><span>Round of 32</span><span>$25</span></li>
            <li><span>Sweet 16</span><span>$50</span></li>
            <li><span>Elite 8</span><span>$100</span></li>
            <li><span>Final Four</span><span>$250</span></li>
            <li><span>Championship Game</span><span>$480</span></li>
          </ul>
        </div>
      </div>
      <div className="leaderboard">
        <h4>Leaderboard</h4>
        <div className='' data-title="Leaderboard">
          <ul id="leaderboard"></ul>
        </div>
      </div>
      <div className="appControl">
        <div id="boardButton">Open Board</div>
      </div>
    </div>
  );
}

export default Sidebar;
