import { getClassName } from '../constants/getClassName';
import styles from '../SignUpForm.module.css';

export const ConfirmPasswordField = ({ value, error, touched, onChange, onBlur }) => {
	return (
		<div className={styles.input__group}>
			<label htmlFor="confirmPassword" className={styles.label}>
				Подтверждение пароля
			</label>
			<input
				id="confirmPassword"
				name="confirmPassword"
				type="password"
				placeholder="Повторите пароль"
				className={getClassName({ error, touched, value })}
				onChange={(e) => onChange(e.target.value)}
				onBlur={(e) => onBlur(e.target.value)}
				value={value}
			/>
			{touched && error && <span className={styles.error}>{error}</span>}
			{touched && !error && value && (
				<span className={styles.success__requirements}>Пароли совпадают</span>
			)}
		</div>
	);
};
