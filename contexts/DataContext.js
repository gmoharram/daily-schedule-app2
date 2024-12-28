import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [scheduleDate, setScheduleDate] = useState(new Date('2025-01-01'));
    const [scheduleItems, setScheduleItems] = useState([{ from: '9:00', to: '10:00', description: "This is my first todo of the day which I've marked as done by swiping left. I can also delete or edit it that way.", isDone: true, isEditing: false }, { from: '10:00', to: '11:00', description: 'I can move a todo to my "To Remember" list by swiping right.', isDone: false, isEditing: false }, { from: '11:00', to: '12:00', description: "I need to refresh the date above to today manually. This is in case I don't check my schedule for a while and forgot when I stopped...", isDone: false, isEditing: false }]);
    const [toRememberItems, setToRememberItems] = useState([{ description: "I can note things that come up during the day here!", isEditing: false }, { description: 'I can always edit or delete stuff by swiping left.', isEditing: false }]);

    useEffect(() => {
        const getScheduleItems = async () => {
            try {
                const scheduleItems = await AsyncStorage.getItem('scheduleItems');
                if (scheduleItems) {
                    setScheduleItems(JSON.parse(scheduleItems));
                }
            } catch (error) {
                console.error(error);
            }
        };

        const getToRememberItems = async () => {
            try {
                const toRememberItems = await AsyncStorage.getItem('toRememberItems');
                if (toRememberItems) {
                    setToRememberItems(JSON.parse(toRememberItems));
                }
            } catch (error) {
                console.error(error);
            }
        };

        const getScheduleDate = async () => {
            try {
                const scheduleDate = await AsyncStorage.getItem('scheduleDate');
                if (scheduleDate) {
                    setScheduleDate(new Date(scheduleDate));
                }
            } catch (error) {
                console.error(error);
            }
        };


        getScheduleItems();
        getToRememberItems();
        getScheduleDate();
    }, []);

    useEffect(() => {
        const saveScheduleItems = async () => {
            try {
                await AsyncStorage.setItem('scheduleItems', JSON.stringify(scheduleItems));
            } catch (error) {
                console.error(error);
            }
        };
        saveScheduleItems();
    }, [scheduleItems]);

    useEffect(() => {
        const saveToRememberItems = async () => {
            try {
                await AsyncStorage.setItem('toRememberItems', JSON.stringify(toRememberItems));
            } catch (error) {
                console.error(error);
            }
        };
        saveToRememberItems();
    }, [toRememberItems]);

    useEffect(() => {
        const saveScheduleDate = async () => {
            try {
                await AsyncStorage.setItem('scheduleDate', scheduleDate.toISOString());
            } catch (error) {
                console.error(error);
            }
        };
        saveScheduleDate();
    }, [scheduleDate]);

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

    const moveUpScheduleItem = (index) => {
        if (index > 0) {
            const newScheduleItems = [...scheduleItems];
            [newScheduleItems[index - 1], newScheduleItems[index]] = [newScheduleItems[index], newScheduleItems[index - 1]];
            setScheduleItems(newScheduleItems);
        }
    }

    const moveDownScheduleItem = (index) => {
        if (index < scheduleItems.length - 1) {
            const newScheduleItems = [...scheduleItems];
            [newScheduleItems[index], newScheduleItems[index + 1]] = [newScheduleItems[index + 1], newScheduleItems[index]];
            setScheduleItems(newScheduleItems);
        }
    }

    const addToRememberItem = (newItem) => {
        setToRememberItems([...toRememberItems, newItem]);
    }

    const addNewToRememberItem = () => {
        const newItem = { description: '', isEditing: true };
        setToRememberItems([...toRememberItems, newItem]);
    }

    const deleteToRememberItem = (index) => {
        const newToRememberItems = toRememberItems.filter((item, i) => i !== index);
        setToRememberItems(newToRememberItems);
    }

    const updateToRememberItem = (index, newItem) => {
        const newToRememberItems = toRememberItems.map((item, i) => i === index ? newItem : item);
        setToRememberItems(newToRememberItems);
    }

    const editToRememberItem = (index) => {
        const newToRememberItems = toRememberItems.map((item, i) => i === index ? { ...item, isEditing: true } : item);
        setToRememberItems(newToRememberItems);
    }

    return (
        <DataContext.Provider value={{
            scheduleDate, setScheduleDate,
            scheduleItems, setScheduleItems, addScheduleItem, deleteScheduleItem, updateScheduleItem, editScheduleItem, toggleScheduleItem, moveUpScheduleItem, moveDownScheduleItem,
            toRememberItems, setToRememberItems, addToRememberItem, addNewToRememberItem, deleteToRememberItem, updateToRememberItem, editToRememberItem,
        }}>
            {children}
        </DataContext.Provider>
    );
};