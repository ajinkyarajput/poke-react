
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import env from 'get-env'
import { Provider } from 'react-redux'

import reducer from './reducers/reducer'
import * as Actions from './actions/actions'
import Full from './components/Full'
import * as Constants from './constants/constants'

class PokeMon {
    constructor() {
        this.store = this.createStore(reducer);
        this.store.dispatch(Actions.fetchPokemon(Constants.POKEMON_LIST_INITIAL_URL));
        this.render();
    }

    createStore(reducer) {
        const composeEnhancers = env() === 'dev' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : compose;

        return createStore(reducer, composeEnhancers(applyMiddleware(
            thunkMiddleware,
        )));
    }

    render() {
        ReactDOM.render(
            <Provider store={this.store}><Full /></Provider>,
            document.getElementById('root')
        );
    }
}
new PokeMon()
