import './Header.css';
import './Header.test.js';

function Header() {

  return (
    <div className="mainContainer">
      <div className="Header">

        <div className="mySquares">
          <h3>My Squares</h3>
          <ul id="mySquares">
          </ul>
        </div>

        <div className='userSelect' id="userSelect">
          <div className="select-container">
            <div className="select">
                <input disabled type="text" id="input" placeholder="Select User"/>
            </div>
            <div className="option-container" id="optionsContainer"></div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default Header;
