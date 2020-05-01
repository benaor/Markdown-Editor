import React, { Component } from 'react';
import './App.css';
import { sampleText } from "./sampleText";
import marked from "marked";

class App extends Component {

  state = {
    text: sampleText
  }

  textChange = (event) => {
    const text = event.target.value
    this.setState({ text })
  }

  renderText = (text) => marked(text, { sanitize: true })

  render() {
    return (
      <div className="app container mt-3">

        <div className="row">

          <div className="col-6">

            <textarea
              className="form-control"
              rows="30"
              value={this.state.text}
              onChange={this.textChange} />

          </div>

          <div className="col-6">

            <div className="resultat" dangerouslySetInnerHTML={{ __html: this.renderText(this.state.text) }}>

            </div>

          </div>

        </div>
      </div>
    )
  };
}

export default App;
