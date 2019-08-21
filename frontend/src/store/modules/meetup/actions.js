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

export function createMeetUpRequest(data) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function createMeetUpSuccess(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function upDateMeetUpRequest(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function upDateMeetUpSuccess(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function cancelMeetUp(meetupId) {
  return {
    type: '@meetup/CANCEL_MEETUP',
    payload: { meetupId },
  };
}
