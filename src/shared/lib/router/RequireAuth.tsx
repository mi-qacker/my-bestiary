import {Navigate, useLocation} from 'react-router-dom';

interface RequireAuthProps {
    children: JSX.Element;
}

export const RequireAuth = ({children}: RequireAuthProps) => {
    const user = true;
    const location = useLocation();

    if (!user)
        return <Navigate to="/sign-in" state={{from: location}} replace/>;
    return children;
};