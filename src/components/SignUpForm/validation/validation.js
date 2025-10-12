export const validateEmail = (email) => {
	if (!email) return 'Email обязателен для заполнения';
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Введите корректный email';
	return '';
};

export const validatePassword = (password) => {
	if (!password) return 'Пароль обязателен для заполнения';
	if (password.length <= 8) return 'Пароль должен содержать минимум 8 символов';
	if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password))
		return 'Пароль должен содержать буквы в верхнем и нижнем регистре';
	if (!/(?=.*\d)/.test(password)) return 'Пароль должен содержать хотя бы одну цифру';
	if (!/(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(password))
		return 'Пароль должен содержать хотя бы один специальный символ';
	return '';
};

export const validateConfirmPassword = (confirmPassword, password) => {
	if (!confirmPassword) return 'Подтверждение пароля обязательно';
	if (confirmPassword !== password) return 'Пароли не совпадают';
	return '';
};

export const validateForm = (formData) => {
	return {
		email: validateEmail(formData.email),
		password: validatePassword(formData.password),
		confirmPassword: validateConfirmPassword(
			formData.confirmPassword,
			formData.password,
		),
	};
};
