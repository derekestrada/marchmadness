import './App.css';
import './App.test.js';

function App() {

  return (
    <div className="App" id="App">
      <div className="boardContainer">
        <div>
          <div id="Board">
          <table className="" id="BoardID">
            <thead>
              <tr colSpan="11" id="winHead"><td colSpan="11" className="locked">Winning Numbers</td></tr>
              <tr className="squareRow locked" id="winningNumbers">
                <td className="locked blank"></td>
                <td className="locked blank"></td>
                <td className="locked"></td>
                <td className="locked"></td>
                <td className="locked"></td>
                <td className="locked"></td>
                <td className="locked"></td>
                <td className="locked"></td>
                <td className="locked"></td>
                <td className="locked"></td>
                <td className="locked"></td>
                <td className="locked"></td>
              </tr>
            </thead>
            <tbody id="loseCon">
              <tr>
                <th rowSpan="11" id="loseHead">Loser Numbers</th>
              </tr>
              <tr className="squareRow">
                <td className="locked"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr className="squareRow">
                <td className="locked"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr className="squareRow">
                <td className="locked"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr className="squareRow">
                <td className="locked"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr className="squareRow">
                <td className="locked"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr className="squareRow">
                <td className="locked"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr className="squareRow">
                <td className="locked"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr className="squareRow">
                <td className="locked"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr className="squareRow">
                <td className="locked"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
              <tr className="squareRow">
                <td className="locked"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
