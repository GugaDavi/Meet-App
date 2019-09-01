import { takeLatest, put, call, all } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../../services/api';

import { meetUpListSuccess } from './actions';

export function* meetUpList() {
  const response = yield call(api.get, 'schedule');

  const data = response.data.map(meetup => ({
    ...meetup,
    dateFormatted: format(parseISO(meetup.date), "dd 'de' MMMM, 'às' HH'h'", {
      locale: pt,
    }),
  }));

  yield put(meetUpListSuccess(data));
}

export default all([takeLatest('@meetup/MEET_LIST_REQUEST', meetUpList)]);
