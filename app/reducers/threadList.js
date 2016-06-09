import { ADD_THREAD } from '../actions/threadList';

export default function threads(state = [], action) {
  switch (action.type) {
    case ADD_THREAD:
      action.card = ( typeof action.card != 'undefined' && action.card instanceof Array ) ? action.card : [action.card]
      return [
        ...state,
        ...action.card
      ];
    default:
      return state;
  }
}
