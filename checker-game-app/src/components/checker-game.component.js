import React, { Component } from 'react';

import CheckerBoard from "./checker-board.component";

export default class CheckerGame extends Component {
  constructor(props) {
    super(props);

    // Must be included to reference the onChangeBoard using 'this'
    this.onChangeBoardSize = this.onChangeBoardSize.bind(this);

    this.state = {boardSize: 8};
  }

  componentDidMount() {
  }
  
  // The On change event for changing the size of the board
  onChangeBoardSize(e) {
    this.setState({
      duration: e.target.value
    })
  }

  render() {
    return (
      <div>
          <CheckerBoard boardSize={boardSize}/>
          <input 
              type="text" 
              className="form-control"
              value={this.state.boardSize}
              onChange={this.onChangeBoardSize}
              />
      </div>
    )
  }
}