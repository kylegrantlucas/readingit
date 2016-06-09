export const ADD_THREAD = 'ADD_THREAD';

export const addThread = (card) => {
  return {
    type: ADD_THREAD,
    card
  };
};
