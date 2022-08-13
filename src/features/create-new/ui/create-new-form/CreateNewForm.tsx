import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import {FormToolbar} from 'features/create-new/ui/form-toolbar/FormToolbar';
import {push, ref, set} from 'firebase/database';
import {useAuthState} from 'react-firebase-hooks/auth';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {auth, db} from 'shared/lib/firebase';
import {FormField, FormTextarea} from 'shared/ui/form-components';
import * as Yup from 'yup';
import styles from './CreateNewForm.module.scss';

interface CreateNewFormValues {
    name: string;
    description: string;
}

const schema = Yup.object({
    name: Yup.string().required('Обязательно для заполнения'),
    description: Yup.string().required('Обязательно для заполнения'),
});

export const CreateNewForm = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<CreateNewFormValues>({resolver: yupResolver(schema)});

    if (!user) return null;

    const onSubmit: SubmitHandler<CreateNewFormValues> = async (value) => {
        const {uid: userId} = user;
        const {name, description} = value;
        const objectsListRef = ref(db, `objects/${userId}`);
        const newObjectsListRef = push(objectsListRef);
        await set(newObjectsListRef, {name, description});
        navigate('/');
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <FormToolbar />
            <div className={styles.fields}>
                <FormField
                    id="name"
                    label="Название нового существа"
                    register={register}
                    error={errors.name}
                    type="text"
                />
                <FormTextarea
                    id="description"
                    label="Описание для нового существа"
                    register={register}
                    error={errors.description}
                />
            </div>
        </form>
    );
};