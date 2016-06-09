export const OPEN_THREAD = 'OPEN_THREAD';

export const openThread = (thread) => {
  return {
    type: OPEN_THREAD,
    thread
  };
};
