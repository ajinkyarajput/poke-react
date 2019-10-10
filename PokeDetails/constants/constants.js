import Immutable from 'immutable';
export const POKEMON_DETAILS_URL = 'https://pokeapi.co/api/v2/pokemon/';
export const POKEMON_LIST_INITIAL_URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=3';
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const RECEIVE_POKEMON_DETAIL = "RECEIVE_POKEMON_DETAIL";
export const FETCHING_POKEMON = "FETCHING_POKEMON";

export const INITIAL_STATE = {
    pokemon: Immutable.fromJS({
        isFetching: true,
        next: POKEMON_LIST_INITIAL_URL
    })
}