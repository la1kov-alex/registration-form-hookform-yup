import { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { EmailField } from './FormFields/EmailField';
import { PasswordField } from './FormFields/PasswordField';
import { ConfirmPasswordField } from './FormFields/ConfirmPasswordField';
import { SuccessMessage } from './SuccessMessage';
import { SubmitButton } from './FormFields/SubmitButton';
import { signUpSchema } from './validation/validationForm';
import styles from './SignUpForm.module.css';

export const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
		watch,
		trigger,
	} = useForm({
		resolver: yupResolver(signUpSchema),
		mode: 'onChange',
		reValidateMode: 'onChange',
	});

	const submitButtonRef = useRef(null);
	const passwordValue = watch('password');
	const emailValue = watch('email');
	const confirmPasswordValue = watch('confirmPassword');

	useEffect(() => {
		if (isValid && submitButtonRef.current && !isSubmitSuccessful) {
			const timer = setTimeout(() => {
				submitButtonRef.current.focus();
			}, 100);

			return () => clearTimeout(timer);
		}
	}, [isValid, isSubmitSuccessful]);

	useEffect(() => {
		if (confirmPasswordValue) {
			trigger('confirmPassword');
		}
	}, [passwordValue, trigger, confirmPasswordValue]);

	const onSubmit = async (data) => {
		// Имитация отправки на сервер
		console.log('Форма отправлена:', data);
		await new Promise((resolve) => setTimeout(resolve, 1000));
		return data;
	};

	if (isSubmitSuccessful) {
		return <SuccessMessage email={emailValue} />;
	}

	return (
		<div className={styles.form__container}>
			<h2 className={styles.form__title}>Регистрация</h2>

			<form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
				<EmailField register={register} error={errors.email} value={emailValue} />

				<PasswordField
					register={register}
					error={errors.password}
					passwordValue={passwordValue}
				/>

				<ConfirmPasswordField
					register={register}
					error={errors.confirmPassword}
					passwordValue={passwordValue}
					confirmPasswordValue={confirmPasswordValue}
				/>

				<SubmitButton
					disabled={!isValid || isSubmitting}
					isSubmitting={isSubmitting}
					ref={submitButtonRef}
				/>
			</form>
		</div>
	);
};
