import React from 'react';
import Card from './card';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
      return (
        <div className="list">
            <h3 className="listTitle">{this.props.listTitle}</h3>
            {this.props.cards}
            <form className="list-form" onSubmit={this.props.onAddSubmit}>
                <label>Card Title</label>
                <input
                  type="text"
                  onChange={this.props.onAddInputChanged}
                />
                <input type="submit" value="submit"/>
            </form>
        </div>
      );
    }
}
