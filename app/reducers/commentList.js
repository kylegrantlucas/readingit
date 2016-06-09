import { ADD_COMMENT_TO_THREAD, CLEAR_OPEN_COMMENT_THREAD } from '../actions/commentList';

export default function openCommentThread(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT_TO_THREAD:
      action.comment = ( typeof action.comment != 'undefined' && action.comment instanceof Array ) ? action.comment : [action.comment]
      return [
        ...state,
        ...action.comment
      ];
    case CLEAR_OPEN_COMMENT_THREAD:
      return [];
    default:
      return state;
  }
}
