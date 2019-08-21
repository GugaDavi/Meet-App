import { takeLatest, put, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '../../../services/api';
import history from '../../../services/history';

import { meetUpListSuccess, createMeetUpSuccess } from './actions';

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

export function* createMeetUp({ payload }) {
  try {
    const { title, description, localization, banner_id, date } = payload.data;

    const response = yield call(api.post, 'meetups', {
      title,
      description,
      localization,
      date,
      banner: Number(banner_id),
    });

    const data = {
      ...response.data,
      dateFormatted: format(
        parseISO(response.data.date),
        "dd 'de' MMMM, 'às' HH'h'",
        {
          locale: pt,
        }
      ),
    };

    console.tron.log(data)

    yield put(createMeetUpSuccess(data));

    toast.success('MeetUp Criado com Sucesso!');

    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro ao criar meetup, gentileza conferir os dados');
    console.tron.log(error);
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetUp),
  takeLatest('@meetup/MEET_LIST_REQUEST', meetUpList),
]);
