import AdminPanel from "../pages/AdminPanel";
import Panel from "../pages/Panel";
import { ADMINPANEL_ROUTE, PANEL_ROUTE } from "../utils/constants";
import React from 'react';

// interface IAuthRoutesItem {
//     path: string;
//     component: React.ReactElement;
//
//}

export const AuthRoutes = [
    { path: PANEL_ROUTE, component: <Panel /> },
    { path: ADMINPANEL_ROUTE, component: <AdminPanel /> },
]

export default AuthRoutes;