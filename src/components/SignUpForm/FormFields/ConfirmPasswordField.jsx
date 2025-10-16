import styles from '../SignUpForm.module.css';

export const ConfirmPasswordField = ({
	register,
	error,
	passwordValue = '',
	confirmPasswordValue = '',
}) => {
	const getClassName = () => {
		if (error) return `${styles.input} ${styles.error}`;
		if (confirmPasswordValue && !error) return `${styles.input} ${styles.success}`;
		return styles.input;
	};

	return (
		<div className={styles.input__group}>
			<label htmlFor="confirmPassword" className={styles.label}>
				Подтверждение пароля
			</label>
			<input
				id="confirmPassword"
				type="password"
				placeholder="Повторите пароль"
				className={getClassName()}
				{...register('confirmPassword')}
			/>
			{error && <span className={styles.error}>{error.message}</span>}
			{confirmPasswordValue && !error && passwordValue === confirmPasswordValue && (
				<span className={styles.success}>Пароли совпадают</span>
			)}
		</div>
	);
};
