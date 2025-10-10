import { EmailField } from './FormFields/EmailField';
import { PasswordField } from './FormFields/PasswordField';
import { ConfirmPasswordField } from './FormFields/ConfirmPasswordField';
import { SuccessMessage } from './SuccessMessage';
import { validateForm } from './validation';
import { useState } from 'react';
import styles from './SignUpForm.module.css';
import { SubmitButton } from './FormFields/SubmitButton';

export const SignUpForm = () => {
	const [formData, setFromData] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [errors, setErrors] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [submitted, setSubmitted] = useState(false);
	const [touched, setTouched] = useState({
		email: false,
		password: false,
		confirmPassword: false,
	});

	const handleChange = (name, value) => {
		setFromData((prev) => ({
			...prev,
			[name]: value,
		}));

		if (touched[name]) {
			const newErrors = validateForm({ ...formData, [name]: value });
			setErrors((prev) => ({
				...prev,
				[name]: newErrors[name],
			}));
		}
	};

	const handleBlur = (name, value) => {
		setTouched((prev) => ({
			...prev,
			[name]: true,
		}));

		const newErrors = validateForm({ ...formData, [name]: value });
		setErrors((prev) => ({
			...prev,
			[name]: newErrors[name],
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const allTouched = Object.keys(touched).reduce((acc, key) => {
			acc[key] = true;
			return acc;
		}, {});

		setTouched(allTouched);

		const newErrors = validateForm(formData);
		setErrors(newErrors);

		if (Object.values(newErrors).every((error) => error === '')) {
			setSubmitted(true);
			console.log('Форма валидна, данные:', formData);
		}
	};

	const isFormValid = () => {
		return (
			Object.values(errors).every((error) => error === '') &&
			Object.values(formData).every((value) => value !== '')
		);
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
					error={errors.confirmPassword}
					touched={touched.confirmPassword}
					onChange={(value) => handleChange('confirmPassword', value)}
					onBlur={(value) => handleBlur('confirmPassword', value)}
				/>
				<SubmitButton disabled={!isFormValid()} />
			</form>
		</div>
	);
};
