import {ObjectInfo} from 'entities/object';
import {BestiaryListPage} from 'pages/bestiary-list';
import {CreateNewPage} from 'pages/create-new';
import {SignInPage} from 'pages/sign-in';
import {SignUpPage} from 'pages/sign-up';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Navigate, Route, Routes} from 'react-router-dom';
import {auth} from 'shared/lib/firebase';
import {RequireAuth} from 'shared/lib/router';
import {Layout} from 'shared/ui/layout';
import {LoadingSpinner} from 'shared/ui/loading-spinner';

/*
 * /:userId/:objectId = object view
 * /create = create new (protected)
 * */

export const Routing = () => {
    const [user, loading] = useAuthState(auth);

    if (loading) return <LoadingSpinner />

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Navigate to={`/${user?.uid}`} />} />
                <Route path="/sign-in" element={<SignInPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/:userId" element={<BestiaryListPage />}>
                    <Route path=":objectId" element={<ObjectInfo />} />
                </Route>
                <Route
                    path="/create"
                    element={
                        <RequireAuth>
                            <CreateNewPage />
                        </RequireAuth>
                    }
                />
            </Routes>
        </Layout>
    );
};
