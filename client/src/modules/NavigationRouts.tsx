import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminPanel from '../pages/AdminPanel';
import Auth from '../pages/Auth';
import Main from '../pages/Main';
import Panel from '../pages/Panel';

const NavigationRouts = () => {
    return (
        <Router>
            <Route path="/" element={<Main />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/pannel" element={<Panel />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/" element={<Main />} />
        </Router>
    );
};

export default NavigationRouts;