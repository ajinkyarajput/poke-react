import React, { Component } from 'react';
import * as Actions from '../actions/actions'

class Pagination extends Component {
    render() {
        return (
            <div>
                <button onClick={this.prevClick.bind(this)}
                    className="pull-left"
                    disabled={!this.props.prev}
                    style={{ marginLeft: "30px" }}>
                    Prev
                </button>
                <button onClick={this.nextClick.bind(this)}
                    disabled={!this.props.next}
                    style={{ marginRight: "30px", float: "right" }}>
                    Next
                </button>
            </div>
        );
    }

    nextClick() {
        this.props.dispatch(Actions.fetchPokemon(this.props.next))
    }

    prevClick() {
        this.props.dispatch(Actions.fetchPokemon(this.props.prev))
    }

}

export default Pagination