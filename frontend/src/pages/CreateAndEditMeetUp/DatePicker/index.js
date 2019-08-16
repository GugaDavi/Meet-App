import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { setHours, setMinutes } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default function SelectDate() {
  const [selected, setSelected] = useState();

  return (
    <DatePicker
      selected={selected}
      onChange={d => setSelected(d)}
      showTimeSelect
      locale={pt}
      minDate={new Date()}
      timeFormat="p"
      timeIntervals={60}
      dateFormat="Pp"
      timeCaption="time"
      minTime={setHours(setMinutes(new Date(), 0), 9)}
      maxTime={setHours(setMinutes(new Date(), 0), 22)}
      placeholderText="Selecione uma data"
    />
  );
}
