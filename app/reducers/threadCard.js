import { OPEN_THREAD } from '../actions/threadCard';

export default function openThread(state = {}, action) {
  switch (action.type) {
    case OPEN_THREAD:
      return action.thread;
    default:
      return state;
  }
}
