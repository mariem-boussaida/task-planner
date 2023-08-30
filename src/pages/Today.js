import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

function Today() {
  return (
    <div>
    <div className='today '></div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        headerToolbar={{
          start: 'today prev,next', // sera normalement à gauche, ou à droite en cas de RTL
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay' // sera normalement à droite, ou à gauche en cas de RTL
        }}
        height={"80vh"}
      />
    </div>
  );
}

export default Today;
