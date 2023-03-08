import './Dashboard.css';
import './Dashboard.test';

function Dashboard() {

  return (
    <div className='DashBoards'>
      <div className="Dashboard" id="resultsContainer">
      </div>
      <div className="Dashboard" id="recentContainer">
        <h4>Recent Winners</h4>
      </div>
      <div className="Dashboard" id="myWinnerContainer">
        <h4>My Winners</h4>
        <div className="Results MyWinners" id="myWinnings"><div className="noWinnings"><h3>Select User To See Winnings</h3></div></div>
      </div>
    </div>
  );
}

export default Dashboard;
