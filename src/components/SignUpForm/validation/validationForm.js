import * as yup from 'yup';

const signUpSchema = yup.object({
	email: yup
		.string()
		.email('Введите корректный email адрес')
		.matches(
			/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
			'Email должен содержать домен (например @mail.ru)',
		)
		.required('Email обязателен для заполнения'),
	password: yup
		.string()
		.min(8, 'Пароль должен содержать минимум 8 символов')
		.matches(
			/(?=.*[a-z])(?=.*[A-Z])/,
			'Пароль должен содержать буквы в верхнем и нижнем регистре',
		)
		.matches(/(?=.*\d)/, 'Пароль должен содержать хотя бы одну цифру')
		.matches(
			/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/,
			'Пароль должен содержать хотя бы один специальный символ',
		)
		.required('Пароль обязателен для заполнения'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Пароли не совпадают')
		.required('Подтверждение пароля обязательно'),
});

export const validateForm = (formData) => {
	try {
		signUpSchema.validateSync(formData, { abortEarly: false });
		return {};
	} catch (validationErrors) {
		const errors = {};
		if (validationErrors.inner) {
			validationErrors.inner.forEach((error) => {
				errors[error.path] = error.message;
			});
		}
		return errors;
	}
};
