import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import threads from './threadList';
import openThread from './threadCard';
import openCommentThread from './commentList';

const rootReducer = combineReducers({
  threads,
  openThread,
  openCommentThread,
  routing
});

export default rootReducer;
