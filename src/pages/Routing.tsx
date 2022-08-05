import {BestiaryListPage} from 'pages/bestiary-list';
import {CreateNewPage} from 'pages/create-new';
import {SignInPage} from 'pages/sign-in';
import {SignUpPage} from 'pages/sign-up';
import {Route, Routes} from 'react-router-dom';
import {RequireAuth} from 'shared/lib/router';
import {Layout} from 'shared/ui/layout';

export const Routing = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/sign-in" element={<SignInPage/>}/>
                <Route path="/sign-up" element={<SignUpPage/>}/>
                <Route path="/" element={<RequireAuth><BestiaryListPage/></RequireAuth>}/>
                <Route path="/new" element={<RequireAuth><CreateNewPage/></RequireAuth>}/>
            </Routes>
        </Layout>
    );
};