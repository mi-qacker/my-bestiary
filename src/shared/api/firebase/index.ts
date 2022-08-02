import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {auth} from 'shared/lib/firebase';

export const useFirebaseAuth = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getErrorMessage = () => {
        if (!error)
            return null;
        switch (error) {
            case 'auth/email-already-in-use':
                return 'Пользователь с таким Email уже существует';
            case 'auth/user-not-found':
                return 'Пользователя с таким Email не существует';
            case 'auth/wrong-password':
                return 'Неверный пароль';
            default:
                return `Неизвестная ошибка ${error}`;
        }
    };

    const startLoading = () => {
        setError('');
        setLoading(true);
    };

    const setErrorCode = (errorCode: string) => {
        setError(errorCode);
        setLoading(false);
    };

    const createNewUser = (email: string, password: string) => {
        startLoading();
        createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
            // TODO реализовать логику сохранения пользователя
            console.log(userCredential.user);
            navigate('/', {replace: true});
        }).catch(error => {
            setErrorCode(error.code);
        });
    };

    const loginUser = (email: string, password: string) => {
        startLoading();
        signInWithEmailAndPassword(auth, email, password).then(userCredential => {
            // TODO реализовать логику сохранения пользователя
            console.log(userCredential.user);
            navigate('/', {replace: true});
        }).catch(error => {
            setErrorCode(error.code);
        });
    };


    return {loading, getErrorMessage, createNewUser, loginUser};
};