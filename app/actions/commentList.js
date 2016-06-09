export const ADD_COMMENT_TO_THREAD = 'ADD_COMMENT_TO_THREAD';
export const CLEAR_OPEN_COMMENT_THREAD = 'CLEAR_OPEN_COMMENT_THREAD';

export const addCommentToThread = (comment) => ({
  type: ADD_COMMENT_TO_THREAD,
  comment
});

export const clearOpenCommentThread = () => ({
  type: CLEAR_OPEN_COMMENT_THREAD
});
