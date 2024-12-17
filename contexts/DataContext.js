import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [scheduleDate, setScheduleDate] = useState(new Date('2024-03-25'));
    const [scheduleItems, setScheduleItems] = useState([{ start: '09:00', end: '10:00', description: 'This is my first todo of the day. I can have a long description like this one or just a short one like "standup meeting".', isDone: false }]);
    const [toRememberItems, setToRememberItems] = useState([{ description: 'This is something I need to remember to do later. I can have a long description like this one or just a short one like "buy milk".' }, { description: 'This is another thing.' }]);

    return (
        <DataContext.Provider value={{ scheduleDate, setScheduleDate, scheduleItems, setScheduleItems, toRememberItems, setToRememberItems }}>
            {children}
        </DataContext.Provider>
    );
};