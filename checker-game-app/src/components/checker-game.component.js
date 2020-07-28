import React, { Component } from 'react';
import './checkerboard.css';
import { v4 as uuidv4 } from 'uuid';


export default class CheckerGame extends Component {
  constructor(props) {
    super(props);

    // Must be included to reference the onChangeBoard using 'this'
    this.onChangeBoardSize = this.onChangeBoardSize.bind(this);
    this.buildBoard = this.buildBoard.bind(this);
      
    // initialize the board with a size of 8
    this.buildBoard(8);

    this.state = {
      boardSize: 8
    };
  }
  
  componentDidMount() {   
  }

  // This function builds out the board
  buildBoard(boardSize){
    //initialize a new board
    var newBoard = Array();

    // Create a new board when the board size changes
    for(var newRow = 0; newRow < boardSize; newRow++){
      var newBoardRow = Array();
      for(var newCell = 0; newCell < boardSize; newCell++){
        var cellKey = uuidv4();
        if(newRow % 2){  
          if(newCell % 2){
            newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square black"></div>);
          }
          else{          
            newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square white"></div>);
          }
        }
        else{      
          if(newCell % 2){
            newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square white"></div>);
          }
          else{          
            newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square black"></div>);
          }
        }
      }

      newBoard.push(<div className="row col-sm-12">{newBoardRow}</div>);
    }

    this.board = newBoard;
  }
  
  // The On change event for changing the size of the board
  onChangeBoardSize(e) {
    var newBoardSize = e.target.value;
    this.setState({
      boardSize: newBoardSize
    })

    // rebuild the board
    this.buildBoard(newBoardSize);
  }

  render() {
    return (
      <form>
        <div>
          <div className="checkers row">
            {this.board}
          </div>          
            <div className="form-group">
              <label>Size of Board: </label>
              <input 
                  type="text" 
                  className="form-control"
                  value={this.state.boardSize}
                  onChange={this.onChangeBoardSize}
                  />
            </div>
        </div>
      </form>
    )
  }
}