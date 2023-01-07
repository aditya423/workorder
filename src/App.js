import arrow from './arrow.png';
import plus from './plus.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='heading-nav'>
        <div id='arrow'>
          <img src={arrow} alt="back-arrow" width="25" height="25" className='arrow'></img>
        </div>
        <h3 className='head'>Create Workorder</h3>
        <button class="button button1">Save</button>
      </div>

      <div className="navbar">
        <a className="nav-link nav-link-ltr" href="#">Overview</a>
        <a className="nav-link nav-link-ltr" href="#">Other</a>
      </div>

      <div>
        <table>
          <tr id='table-headings'>
            <th><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
          <label for="vehicle1"> Packages</label></th>
            <th>Rate <span class="notbold">(in sqft)</span></th>
            <th>Total</th>
          </tr>
          
          <tr>
            <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
          <label for="vehicle1"> Civil 1</label></td>
            <td>567.80</td>
            <td>&#x20b9; 2,98,6792 <div id='plus'><img src={plus} alt="back-arrow" width="15" height="15" className='arrow'></img></div></td>
          </tr>
          <tr>
            <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
          <label for="vehicle1"> Civil 2</label></td>
            <td>567.80</td>
            <td>&#x20b9; 2,98,6792 <div id='plus'><img src={plus} alt="back-arrow" width="15" height="15" className='arrow'></img></div></td>
          </tr>
          <tr>
            <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
          <label for="vehicle1"> Civil 3</label></td>
            <td>567.80</td>
            <td>&#x20b9; 2,98,6792 <div id='plus'><img src={plus} alt="back-arrow" width="15" height="15" className='arrow'></img></div></td>
          </tr>
          <tr>
            <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
          <label for="vehicle1"> Civil 4</label></td>
            <td>567.80</td>
            <td>&#x20b9; 2,98,6792 <div id='plus'><img src={plus} alt="back-arrow" width="15" height="15" className='arrow'></img></div></td>
          </tr>
          <tr>
            <td><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
          <label for="vehicle1"> Civil 5</label></td>
            <td>567.80</td>
            <td>&#x20b9; 2,98,6792 <div id='plus'><img src={plus} alt="back-arrow" width="15" height="15" className='arrow'></img></div></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
