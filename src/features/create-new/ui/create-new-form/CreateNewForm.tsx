import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import {FormToolbar} from 'features/create-new/ui/form-toolbar/FormToolbar';
import {SubmitHandler, useForm} from 'react-hook-form';
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
    const {
        register,
        formState: {errors},
        handleSubmit,
    } = useForm<CreateNewFormValues>({resolver: yupResolver(schema)});

    const onSubmit: SubmitHandler<CreateNewFormValues> = (value) => {
        console.log(value);
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