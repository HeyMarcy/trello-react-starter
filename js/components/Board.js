import React from 'react';
import List from './list';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.onAddInputChanged = this.onAddInputChanged.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
  };

  onAddInputChanged(event) {
    this.setState({value : event.target.value});
    console.log(this.state.value);
  }
  onAddSubmit(event) {
    event.preventDefault();
    console.log('submitted', this.state.value);
  }

  render() {
    const boardList = [];
    for (let i = 0; i < 3; i++) {
      boardList.push(
        <List
          onAddSubmit={this.onAddSubmit}
          onAddInputChanged={this.onAddInputChanged}
          listTitle={`Title of list ${i + 1}`}
        />
      );
    }

    return (
      <div className="board">
        <h3 className="boardTitle">{this.props.boardTitle}</h3>
        {boardList}
      </div>
    )
  }
}
