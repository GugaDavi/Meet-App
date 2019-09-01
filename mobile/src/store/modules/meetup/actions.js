export function meetUpListRequest() {
  return {
    type: '@meetup/MEET_LIST_REQUEST',
  };
}

export function meetUpListSuccess(meetups) {
  return {
    type: '@meetup/MEET_LIST_SUCCESS',
    payload: { meetups },
  };
}
