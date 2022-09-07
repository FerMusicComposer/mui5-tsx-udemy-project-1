import { AlertColor } from '@mui/material';
import React, { useContext, useState } from 'react';
import { Notification } from '../components/notifications';

type ContextProps = {
    getError: (errorMsg: string) => void;
    getSuccess: (successMsg: string) => void;
};

const NotificationContext = React.createContext<ContextProps | null>(null);

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const [msg, setMsg] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const [severity, setSeverity] = useState<AlertColor | undefined>(undefined);

    const handleClose = () => {
        setOpen(false);
    };

    const getError = (errorMsg: string) => {
        setSeverity('error');
        setMsg(errorMsg);
        setOpen(true);
    };

    const getSuccess = (successMsg: string) => {
        setSeverity('success');
        setMsg(successMsg);
        setOpen(true);
    };

    const value = {
        getError,
        getSuccess,
    };

    return (
        <NotificationContext.Provider value={value}>
            <Notification msg={msg} open={open} severity={severity} handleClose={handleClose} />
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    const context = useContext(NotificationContext);

    if (!context) throw new Error("There's no context");

    return context;
};
