import { takeLatest, put, call, all } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../../services/api';

import { registerListSuccess } from './actions';

export function* registerList() {
  const response = yield call(api.get, 'inscriptions');

  const data = response.data.map(inscription => ({
    ...inscription,
    dateFormatted: format(parseISO(inscription.Meetup.date), "dd 'de' MMMM, 'às' HH'h'", {
      locale: pt,
    }),
  }));

  yield put(registerListSuccess(data));
}

export function* newRegister({ payload }) {
  const { meetupId } = payload;

  yield call(api.post, `inscriptions/${meetupId}`);

  yield registerList();
}

export function* cancelRegister({ payload }) {
  const { registerId } = payload;

  try {
    yield call(api.delete, `inscriptions/${registerId}`);
    yield registerList();
  } catch (error) {
    console.tron.log(error);
  }
}

export default all([
  takeLatest('@register/REGISTER_LIST_REQUEST', registerList),
  takeLatest('@register/CANCEL_REGISTER', cancelRegister),
  takeLatest('@register/NEW_REGISTER', newRegister),
]);
