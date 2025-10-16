import { PasswordRequirements } from './PasswordRequirements';
import styles from '../SignUpForm.module.css';

export const PasswordField = ({ register, error, passwordValue = '' }) => {
	const getClassName = () => {
		if (error) return `${styles.input} ${styles.error}`;
		if (passwordValue && !error) return `${styles.input} ${styles.success}`;
		return styles.input;
	};

	return (
		<div className={styles.input__group}>
			<label htmlFor="password" className={styles.label}>
				Пароль
			</label>
			<input
				id="password"
				type="password"
				placeholder="Введите пароль"
				className={getClassName()}
				{...register('password')}
			/>
			{error && <span className={styles.error}>{error.message}</span>}
			<PasswordRequirements password={passwordValue} />
		</div>
	);
};
