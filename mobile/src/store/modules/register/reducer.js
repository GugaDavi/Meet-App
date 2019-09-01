import produce from 'immer';

const INITIAL_STATE = {
  registers: null,
};

export default function register(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@register/REGISTER_LIST_SUCCESS':
        draft.registers = action.payload.registers;
        break;
      case '@auth/SIGN_OUT':
        draft.registers = null;
        break;
      default:
        break;
    }
  });
}
