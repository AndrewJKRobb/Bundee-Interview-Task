import React, { Component } from 'react';
import './checkerboard.css';
import { v4 as uuidv4 } from 'uuid';


export default class CheckerGame extends Component {
  constructor(props) {
    super(props);

    // Must be included to reference the onChangeBoard using 'this'
    this.onChangeBoardSize = this.onChangeBoardSize.bind(this);
    this.buildBoard = this.buildBoard.bind(this);
    this.onChangeColorSelection = this.onChangeColorSelection.bind(this);
    this.onChangeShapeSelection = this.onChangeShapeSelection.bind(this);      

    this.state = {
      boardSize: 8,
      colorSelection: 'red',
      shapeSelection: 'square'
    };
    
    // initialize the board with a size of 8
    this.buildBoard(8);
  }
  
  componentDidMount() {   
  }

  // This function builds out the board
  buildBoard(boardSize){
    // Initialize a new board
    var newBoard = Array();

    var topColorPiece = this.state.colorSelection === 'red' ? 'redPiece' : this.state.colorSelection === 'blue' ? 'bluePiece' : 'orangePiece';
    var bottomColorPiece = this.state.colorSelection === 'red' ?  'blackPiece' : this.state.colorSelection === 'blue' ? 'greenPiece' : 'pinkPiece';
    var shapePiece = this.state.shapeSelection === 'circle' ? 'circlePiece' : 'squarePiece'

    var topPiece = topColorPiece + ' ' + shapePiece;
    var bottomPiece = bottomColorPiece + ' ' + shapePiece;

    // Create a new board when the board size changes
    for(var newRow = 0; newRow < boardSize; newRow++){
      var newBoardRow = Array();
      for(var newCell = 0; newCell < boardSize; newCell++){
        var cellKey = uuidv4();
        
        if(newRow % 2){  
          if(newCell % 2){
              if(newRow === 0 || newRow === 1){
                newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square black"><div className={topPiece}></div></div>);
              }   
              if(newRow === boardSize - 1 || newRow === boardSize - 2){
                newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square black"><div className={bottomPiece}></div></div>);
              }
              else{
                newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square black"></div>); 
              }           
          }
          else{      
            if(newRow === 0 || newRow === 1){
              newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square white"><div className={topPiece}></div></div>);
            }
            if(newRow === boardSize - 1 || newRow === boardSize - 2){
              newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square white"><div className={bottomPiece}></div></div>);
            }
            else{
              newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square white"></div>);
            }
          }
        }
        else{      
          if(newCell % 2){   
            if(newRow === 0 || newRow === 1){
              newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square white"><div className={topPiece}></div></div>);
            }
            if(newRow === boardSize - 1 || newRow === boardSize - 2){
              newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square white"><div className={bottomPiece}></div></div>);
            }
            else{    
              newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square white"></div>);
            }
          }
          else{          
            if(newRow === 0 || newRow === 1){
              newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square black"><div className={topPiece}></div></div>);
            }
            if(newRow === boardSize - 1 || newRow === boardSize - 2){
              newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square black"><div className={bottomPiece}></div></div>);
            }
            else{    
              newBoardRow.push(<div key={cellKey} className="checkerCell col-sm square black"></div>);
            }   
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

    if(newBoardSize < 5){
      console.log('The Board needs to be at least a 5X5 board');
    }
    else{
      this.setState({
        boardSize: newBoardSize
      })
  
      // rebuild the board
      this.buildBoard(newBoardSize);
    }
  }
  
  // The On change event for updating the color of the pieces
  onChangeColorSelection(e) {    
    this.setState({
      colorSelection:  e.target.value
    })
  
    this.buildBoard(this.state.boardSize);
  }
  
  // The On change event for updating the shape of the pieces
  onChangeShapeSelection(e) { 
    this.setState({
      shapeSelection:  e.target.value
    })

    this.buildBoard(this.state.boardSize);
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
            <div className='col-sm-12'>      
              <div className='col-sm-5'>
                <label>Change Color</label>
                <div className="radio">
                  <label>
                    <input type="radio" value="blue" checked={this.state.colorSelection === 'blue'} onChange={this.onChangeColorSelection} />
                    Change Color to Blue/Green
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="orange"  checked={this.state.colorSelection === 'orange'} onChange={this.onChangeColorSelection} />                
                    Change Color to Orange/Pink
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="red"  checked={this.state.colorSelection === 'red'} onChange={this.onChangeColorSelection} />
                    Change Color to Red/Black
                  </label>
                </div>
              </div>
              
              <div className='col-sm-5'>
                <label>Change Shape</label>
                <div className="radio">
                  <label>
                    <input type="radio" value="square" checked={this.state.shapeSelection === 'square'} onChange={this.onChangeShapeSelection} />
                    Change Shape to Square
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="circle" checked={this.state.shapeSelection === 'circle'} onChange={this.onChangeShapeSelection} />       
                    Change Color to Circle
                  </label>
                </div>
              </div>
            </div>   
        </div>
      </form>
    )
  }
}