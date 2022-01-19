import react from "react"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React from "react";

export default class DemoApp extends React.Component {
    render() {
        return(
            <FullCalendar 
                plugins={[ dayGridPlugin, interactPlugin]}
                eventContent={renderEventContent}
                editable={true}
                initialEvents={[
                    {
                        title: 'The Title',
                        start: '2022-01-29',
                        end: '2022-01-31'
                    }
                ]}
            />
        )
    }
}