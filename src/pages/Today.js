import React from "react";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import "@syncfusion/ej2-calendars/styles/material.css";

const Today = () => {
  const data = [
    {
      Id: 2,
      Subject: 'Meeting',
      StartTime: new Date(2018, 1, 15, 10, 0),
      EndTime: new Date(2018, 1, 15, 12, 30),
      IsAllDay: false,
      Status: 'Completed',
      Priority: 'High'
    },
  ];

  const fieldsData = {
    id: 'Id',
    subject: { name: 'Subject' },
    isAllDay: { name: 'IsAllDay' },
    startTime: { name: 'StartTime' },
    endTime: { name: 'EndTime' }
  };

  const eventSettings = { dataSource: data, fields: fieldsData };

  return (
    <div className="m-4 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <h1>Calendars</h1>
      <ScheduleComponent
        width='100%'
        height='550px'
        selectedDate={new Date(2018, 1, 15)}
        eventSettings={eventSettings}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  );
}

export default Today;
