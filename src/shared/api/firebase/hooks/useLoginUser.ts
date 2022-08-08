import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {auth} from 'shared/lib/firebase';

export const useLoginUser = () => {
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const getErrorMessage = () => {
        if (!error) return null;
        switch (error.code) {
            case 'auth/user-not-found':
                return 'Пользователя с таким Email не существует';
            case 'auth/wrong-password':
                return 'Неверный пароль';
            default:
                return `Неизвестная ошибка ${error.code}`;
        }
    };

    const login = async (email: string, password: string) => {
        await signInWithEmailAndPassword(email, password);
    };

    return {login, getErrorMessage, loading, user};
};
