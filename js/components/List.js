import React from 'react';
import Card from './card';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            value: ""
        }
    }
    render() {

        return (
            <div className="list">
                <h3 className="listTitle">{this.props.listTitle}</h3>

                <form className="list-form">
                    <label>Card Title</label>
                    <input type="text"></input>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        );
    }
}
