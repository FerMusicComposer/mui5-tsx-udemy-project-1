import React from 'react';
import Header from '../../components/ui/Header';

export const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <h1 className="headline">You are at Home!</h1>
        </div>
    );
};
