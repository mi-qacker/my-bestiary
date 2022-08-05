import {useAuthState} from 'react-firebase-hooks/auth';
import {Navigate, useLocation} from 'react-router-dom';
import {auth} from 'shared/lib/firebase';
import {LoadingSpinner} from 'shared/ui/loading-spinner/LoadingSpinner';

interface RequireAuthProps {
    children: JSX.Element;
}

export const RequireAuth = ({children}: RequireAuthProps) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading)
        return <LoadingSpinner/>;
    if (user === null)
        return <Navigate to="/sign-in" state={{from: location}} replace/>;
    return children;
};