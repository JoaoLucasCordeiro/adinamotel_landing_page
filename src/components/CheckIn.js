import React, { useState } from 'react';

// DataPicker
import DatePicker from 'react-datepicker'

// CSS do DatePicker
import 'react-datepicker/dist/react-datepicker.css'
import '../datepicker.css'

import { BsCalendar } from 'react-icons/bs'

const CheckIn = () => {

  const [startDate, setStartDate] = useState(false)

  return (
    <div className='relative flex items-center h-full justify-end'>
      <div className='absolute z-10 pr-8'>
        <div>
          <BsCalendar className='text-accent text-base'/>
        </div>
      </div>
      <DatePicker
        className='w-full h-full'
        selected={startDate}
        placeholderText='Dia de chegada'
        onChange={(date) => setStartDate(date)} />
    </div>
  )
};

export default CheckIn;
