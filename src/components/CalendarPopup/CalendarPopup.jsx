import React from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css"

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
                placeholderText="Choose"
                dateFormat="MM/dd/yy"
                // className="calendar-input"
                calendarClassName="calendar-popup"
            />
        );
    }
}

export default CalendarPopup
