import React, { Component } from 'react';
import './style/_ListItem.css'

class ListItem extends Component {
    render() {
        return (
            <div style={{ backgroundImage: "url(" + this.props.imageUrl + ")" }}
                className="item" >
                <div className="center">
                    {this.props.name}
                </div>

            </div>
        );
    }
}

export default ListItem