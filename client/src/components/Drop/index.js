import React, {Component} from 'react';
import './style.css';

//import Materialize from "materialize";


// Import Materialize
import M from "materialize-css";


class Drop extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    
    render() {
        return(
        <div>
          <div className="input-field col s12">
            <select>
              <option value="" disabled selected>Choose your option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label>Materialize Select</label>
          </div>
        </div>
        )
    }
}

export default Drop;