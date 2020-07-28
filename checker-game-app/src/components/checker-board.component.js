import React, { Component } from 'react';

export default class CheckerBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {boardSize: 8};
  }

  componentDidMount() {
  }
  

  render() {
    return (
      <div>
          <tr>
              <td></td>
          </tr>
      </div>
    )
  }
}