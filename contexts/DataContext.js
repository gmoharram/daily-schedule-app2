import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [scheduleDate, setScheduleDate] = useState(new Date('2024-03-25'));
    const [scheduleItems, setScheduleItems] = useState([{ from: '09:00', to: '10:00', description: 'This is my first todo of the day. I can have a long description like this one or just a short one like "standup meeting".', isDone: false, isEditing: false }, { from: '10:00', to: '11:00', description: 'This is my second todo of the day.', isDone: false, isEditing: false }]);
    const [toRememberItems, setToRememberItems] = useState([{ description: 'This is something I need to remember to do later. I can have a long description like this one or just a short one like "buy milk".' }, { description: 'This is another thing.' }]);

    const addScheduleItem = () => {
        const newItem = { from: '00:00', to: '00:00', description: '', isDone: false, isEditing: true };
        setScheduleItems([...scheduleItems, newItem]);
    }

    const deleteScheduleItem = (index) => {
        const newScheduleItems = scheduleItems.filter((item, i) => i !== index);
        setScheduleItems(newScheduleItems);
    }

    const updateScheduleItem = (index, newItem) => {
        const newScheduleItems = scheduleItems.map((item, i) => i === index ? newItem : item);
        setScheduleItems(newScheduleItems);
    }

    const toggleScheduleItem = (index) => {
        const newScheduleItems = scheduleItems.map((item, i) => i === index ? { ...item, isDone: !item.isDone } : item);
        setScheduleItems(newScheduleItems);
    }

    const editScheduleItem = (index) => {
        const newScheduleItems = scheduleItems.map((item, i) => i === index ? { ...item, isEditing: true } : item);
        setScheduleItems(newScheduleItems);
    }

    const addToRememberItem = (newItem) => {
        setToRememberItems([...toRememberItems, newItem]);
    }

    return (
        <DataContext.Provider value={{
            scheduleDate, setScheduleDate,
            scheduleItems, setScheduleItems, addScheduleItem, deleteScheduleItem, updateScheduleItem, editScheduleItem, toggleScheduleItem,
            toRememberItems, setToRememberItems, addToRememberItem
        }}>
            {children}
        </DataContext.Provider>
    );
};