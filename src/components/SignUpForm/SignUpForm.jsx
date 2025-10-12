import { useState } from 'react';
import { EmailField } from './FormFields/EmailField';
import { PasswordField } from './FormFields/PasswordField';
import { ConfirmPasswordField } from './FormFields/ConfirmPasswordField';
import { SuccessMessage } from './SuccessMessage';
import { SubmitButton } from './FormFields/SubmitButton';
import { validateForm } from './validation/validationForm';
import styles from './SignUpForm.module.css';

export const SignUpForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [errors, setErrors] = useState({});
	const [touched, setTouched] = useState({});
	const [submitted, setSubmitted] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (name, value) => {
		setFormData((prev) => {
			const newFormData = { ...prev, [name]: value };

			if (touched[name]) {
				const newErrors = validateForm(newFormData);
				setErrors((prevErrors) => ({
					...prevErrors,
					[name]: newErrors[name] || '',
				}));
			}

			return newFormData;
		});
	};

	const handleBlur = (name, value) => {
		setTouched((prev) => ({
			...prev,
			[name]: true,
		}));

		const currentFormData = { ...formData, [name]: value };
		const newErrors = validateForm(currentFormData);
		setErrors((prev) => ({
			...prev,
			[name]: newErrors[name] || '',
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const allTouched = {
			email: true,
			password: true,
			confirmPassword: true,
		};
		setTouched(allTouched);

		const newErrors = validateForm(formData);
		setErrors(newErrors);

		const hasErrors = Object.values(newErrors).some((error) => error && error !== '');

		if (!hasErrors) {
			setIsSubmitting(true);
			await new Promise((resolve) => setTimeout(resolve, 1000)); // Добавил имитацию отправки данных на сервер
			console.log('Форма отправлена:', formData);
			setSubmitted(true);
			setIsSubmitting(false);
		}
	};

	const isFormValid = () => {
		const noErrors = Object.values(errors).every((error) => !error || error === '');
		const allFieldsFilled = Object.values(formData).every((value) => value !== '');

		return noErrors && allFieldsFilled;
	};

	if (submitted) {
		return <SuccessMessage email={formData.email} />;
	}

	return (
		<div className={styles.form__container}>
			<h2 className={styles.form__title}>Регистрация</h2>
			<form className={styles.form} onSubmit={handleSubmit} noValidate>
				<EmailField
					value={formData.email}
					error={errors.email}
					touched={touched.email}
					onChange={(value) => handleChange('email', value)}
					onBlur={(value) => handleBlur('email', value)}
				/>
				<PasswordField
					value={formData.password}
					error={errors.password}
					touched={touched.password}
					onChange={(value) => handleChange('password', value)}
					onBlur={(value) => handleBlur('password', value)}
				/>
				<ConfirmPasswordField
					value={formData.confirmPassword}
					password={formData.password}
					error={errors.confirmPassword}
					touched={touched.confirmPassword}
					onChange={(value) => handleChange('confirmPassword', value)}
					onBlur={(value) => handleBlur('confirmPassword', value)}
				/>
				<SubmitButton
					disabled={!isFormValid() || isSubmitting}
					isSubmitting={isSubmitting}
				/>
			</form>
		</div>
	);
};
