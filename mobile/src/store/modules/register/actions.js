export function registerListRequest() {
  return {
    type: '@register/REGISTER_LIST_REQUEST',
  };
}

export function registerListSuccess(registers) {
  return {
    type: '@register/REGISTER_LIST_SUCCESS',
    payload: { registers },
  };
}

export function cancelRegisterRequest(registerId) {
  return {
    type: '@register/CANCEL_REGISTER',
    payload: { registerId },
  };
}

export function newRegisteRequest(meetupId) {
  return {
    type: '@register/NEW_REGISTER',
    payload: { meetupId },
  };
}
