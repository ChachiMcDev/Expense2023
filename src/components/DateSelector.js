import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Calendar, DateRangePicker } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file



import { format } from 'date-fns'
import { useState, useEffect } from "react";

const date1 = new Date(2023, 1, 1)
const date1display = format(date1, 'MM/dd/yyyy')

const date2 = new Date(2023, 2, 28)
const date2Display = format(date2, 'MM/dd/yyyy')

console.log('date1::', date1display)
console.log('date2::', date2Display)




const DateSelector = () => {

    const [startDate, setStartDate] = useState(date1)
    const [startDate1, setStartDate1] = useState(date1)

    const handleOnChange = (date) => {
        setStartDate(date)
        console.log(format(startDate, 'MM/dd/yyyy'))
    }
    const handleOnChange1 = (datex) => {
        setStartDate1(datex)

    }


    ///no need for this, just visual for self
    useEffect(() => {
        console.log(format(startDate1, 'MM/dd/yyyy'))
    }, [startDate1])


    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        color: 'green',
        autoFocus: true,
        showDateDisplay: true,
        key: 'selection',
    })

    const handleSelect = ({ selection }) => {
        console.log(selection.startDate);
        console.log(selection.endDate);

        setSelectionRange({
            startDate: selection.startDate,
            endDate: selection.endDate,
            key: 'selection',
        })
        // {
        //   selection: {
        //     startDate: [native Date Object],
        //     endDate: [native Date Object],
        //   }
        // }
    }

    ///no need for this, just visual for self
    useEffect(() => {
        console.log('selectionRange', selectionRange)
    }, [selectionRange])

    // const selectionRange = {
    //     startDate: new Date(2023, 1, 1),
    //     endDate: new Date(2023, 2, 28),
    //     key: 'selection',
    // }

    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={handleOnChange} />

            <Calendar
                date={new Date()}
                onChange={handleOnChange1}
            />

            <DateRangePicker
                ranges={[selectionRange]}
                rangeColors={['green']}
                onChange={handleSelect}
                showSelectionPreview={true}
                shownDate={new Date()}
            />
        </div>
    )
}

export default DateSelector