import React, {useState} from 'react';
import QueryFilter from './QueryFilter';

const Pickers = () => {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };
    return (
        <QueryFilter selectedDate={selectedDate} handleDateChange={handleDateChange} />
    )
};

export default Pickers;