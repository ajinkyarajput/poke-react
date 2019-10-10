import pokemon from './pokemon';
import * as Constants from '../constants/constants';

export default function reducer(state = Constants.INITIAL_STATE, action) {
    return {
        pokemon: pokemon(state.pokemon, action),
    };
}