import React, { Component } from 'react';
import { connect } from 'react-redux'
import List from './List';
import Pagination from './Pagination';

class Full extends Component {
    render() {
        return <div>
            {this.renderList()}
            {this.renderPagination()}
        </div>
    }

    renderList() {
        return !this.props.pokemon.get('isFetching') && (
            <List
                items={this.props.pokemon.get('results').toList()} />
        );
    }

    renderPagination() {
        return !this.props.pokemon.get('isFetching') && (
            <Pagination
                dispatch={this.props.dispatch}
                next={this.props.pokemon.get('next')}
                prev={this.props.pokemon.get('previous')} />
        );
    }
}

function select(state) {
    return state;
}
export default connect(select)(Full)