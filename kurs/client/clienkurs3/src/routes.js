import ADMIN from './pages/Admin'
import {
    ADMIN_ROUTE,
    COMPANIES_ROUTE,
    COMPANYPAGE_ROUTE,
    FINDJOB_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE, WORKERS_ROUTE
} from "./utils/consts";
import Findjob from "./pages/Findjob";
import Companies from "./pages/Companies";
import Companypage from "./pages/Companypage";
import Workers from "./pages/Workers";
import Auth from "./pages/Auth";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: ADMIN
    }

]
export const publicRoutes = [
    {
        path: FINDJOB_ROUTE,
        Component: Findjob
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: COMPANIES_ROUTE,
        Component: Companies
    },
    {
        path: WORKERS_ROUTE,
        Component: Workers
    },
    {
        path: COMPANYPAGE_ROUTE +'/:id',
        Component: Companypage
    }
]