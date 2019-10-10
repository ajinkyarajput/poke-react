import axios from 'axios';
import {
    POKEMON_DETAILS_URL, RECEIVE_POKEMON,
    RECEIVE_POKEMON_DETAIL,
    FETCHING_POKEMON
} from '../constants/constants'

export function fetchPokemon(url) {
    return (dispatch) => {
        dispatch(fetchingPokemon(true))
        return axios.get(url).then(response => response.data)
            .then(data => {
                let newResult = {};
                for (let itemIndex in data.results) {
                    let item = data.results[itemIndex];
                    let id = item.url.replace(POKEMON_DETAILS_URL, "").replace("/", "");
                    item.id = id;
                    dispatch(fetchPokemonDetails(id));
                    newResult[id] = item;
                }
                data.results = newResult;
                dispatch(receivePokemon(data));
                dispatch(fetchingPokemon(false));
            })
    }
}

export function fetchingPokemon(isFetching){
    return {
        type: FETCHING_POKEMON,
        isFetching: isFetching
    }
}

export function fetchPokemonDetails(id) {
    return (dispatch, getState) => {
        return axios.get(POKEMON_DETAILS_URL + id).then(response => response.data)
            .then(data => {
                dispatch(receivePokeMonDetails(data));
            })
    }
}

export function receivePokemon(data) {
    return {
        type: RECEIVE_POKEMON,
        data: data
    }
}

export function receivePokeMonDetails(data) {
    return {
        type: RECEIVE_POKEMON_DETAIL,
        data: data
    }
}