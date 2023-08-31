import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import "bootstrap/dist/css/bootstrap.min.css"; // Corrected import
import * as bootstrap from "bootstrap"; // Import Bootstrap
<<<<<<< HEAD
import './style.css';
=======
>>>>>>> 1111b14454b5c5d7f08a54d5ed2b6ca20bf97ed9

function Today() {
  const events = [
    {
      title: "the Title",
      start: "2023-01-05T08:00:00",
      end: "2023-01-05T09:00:00"
    },
  ];

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        height={"80vh"}
        events={events}
        eventDidMount={(info) => {
          return new bootstrap.Popover(info.el, {
            title: info.event.title,
            placement: "auto",
            trigger: "hover",
            customClass: "popoverStyle",
            content: "<p>Please subscribe <strong>Bootstrap Popover</strong></p>", // Fix the syntax here
            html: true,
          });
        }}
      />
    </div>
  );
}

export default Today;