import {BestiaryListPage} from 'pages/bestiary-list';
import {CreateNewPage} from 'pages/create-new';
import {SignInPage} from 'pages/sign-in';
import {SignUpPage} from 'pages/sign-up';
import {Route, Routes} from 'react-router-dom';

export const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<BestiaryListPage/>}/>
            <Route path="/new" element={<CreateNewPage/>}/>
            <Route path="/sign-in" element={<SignInPage/>}/>
            <Route path="/sign-up" element={<SignUpPage/>}/>
        </Routes>
    );
};