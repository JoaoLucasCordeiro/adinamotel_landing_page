import React, {useState} from 'react';

// DataPicker
import DatePicker from 'react-datepicker'

// CSS do DatePicker
import 'react-datepicker/dist/react-datepicker.css'
import '../datepicker.css'

import { BsCalendar } from 'react-icons/bs'

const CheckOut = () => {
  const [endDate, setEndDate] = useState(false)

  return (
    <div className='relative flex items-center h-full justify-end'>
      <div className='absolute z-10 pr-8'>
        <div>
          <BsCalendar className='text-accent text-base' />
        </div>
      </div>
      <DatePicker
        className='w-full h-full'
        selected={endDate}
        placeholderText='Dia de saída'
        onChange={(date) => setEndDate(date)} />
    </div>
  )
};

export default CheckOut;
