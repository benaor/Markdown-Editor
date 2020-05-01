import React, { Component } from 'react';
import './App.css';
import { sampleText } from "./sampleText";

class App extends Component {

  state = {
    text : sampleText
  }

  textChange = (event) => {
    const text = event.target.value
    this.setState({ text })
  }

  render() {
    return (
      <div className="app container mt-3">

        <div className="row">

          <div className="col-6">

            <textarea
              className="form-control"
              rows="30"
              value={this.state.text} 
              onChange={this.textChange}/>

          </div>

          <div className="col-6">

            <div>

              { sampleText }

            </div>

          </div>

        </div>
      </div>
    )
  };
}

export default App;
