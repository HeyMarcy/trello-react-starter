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
            <Card text="Shopping"/>
            <Card text="Cooking"/>
            <Card text="Car repair"/>
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

// <Button onClick={this.onButtonClick} text='Ready to be amazed?' />
//                {this.state.clicked ? <SoundCloudEmbed trackId='191075550' /> : null}
//            </div>
