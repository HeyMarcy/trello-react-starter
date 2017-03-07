import React from 'react';
import Card from './card';
import List from './list';

export default class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      value: '',
      cards: [
          <Card text="Shopping"/>,
          <Card text="Cooking"/>,
          <Card text="Car repair"/>
        ]
    }
  }


  render() {
    return (
      <List cards={this.state.cards} />
    );
  }
}
