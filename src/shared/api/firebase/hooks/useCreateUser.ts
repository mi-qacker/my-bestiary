import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {auth} from 'shared/lib/firebase';

export const useCreateUser = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const create = async (email: string, password: string) => {
        await createUserWithEmailAndPassword(email, password);
    };

    const getErrorMessage = () => {
        if (!error)
            return null;
        switch (error.code) {
            case 'auth/email-already-in-use':
                return 'Пользователь с таким Email уже существует';
            default:
                return `Неизвестная ошибка ${error}`;
        }
    };


    return {create, getErrorMessage, loading, user};
};