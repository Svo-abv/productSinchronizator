import Auth from "../pages/Auth";
import { AUTH_ROUTE } from "../utils/constants";
import React from 'react';

// interface IAuthRoutesItem {
//     path: string;
//     component: React.ReactElement;
//
//}
const PublicRoutes = [
    { path: AUTH_ROUTE, component: <Auth /> }
]

export default PublicRoutes;