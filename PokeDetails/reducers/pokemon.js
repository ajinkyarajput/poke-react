import * as Constants from '../constants/constants';
import Immutable from 'immutable';
export default function pokemon(
    state = Constants.INITIAL_STATE.pokemon,
    action
) {
    switch (action.type) {
        case Constants.FETCHING_POKEMON:
            return state.set('isFetching', action.isFetching);
        case Constants.RECEIVE_POKEMON:            
            return Immutable.fromJS(action.data);
        case Constants.RECEIVE_POKEMON_DETAIL:
            return state.setIn(["results", action.data.id + "", 'image_url'], action.data.sprites.front_default);
        default:
            return state;
    }
}