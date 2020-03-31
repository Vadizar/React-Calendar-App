import React from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"

const today = new Date();

class CalendarPopup extends React.Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            startDate: 0
        };
    }

    render() {
        return (
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                minDate={today}
                placeholderText="Choose"
                dateFormat="MM/dd/yy"
                // className="calendar-input"
                calendarClassName="react-datepicker-popup"
            />
        );
    }
}

export default CalendarPopup
