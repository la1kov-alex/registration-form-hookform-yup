import { PasswordRequirements } from './PasswordRequirements';
import { getClassName } from '../constants/getClassName';
import styles from '../SignUpForm.module.css';

export const PasswordField = ({ value, error, touched, onChange, onBlur }) => {
	return (
		<div className={styles.input__group}>
			<label htmlFor="password" className={styles.label}>
				Пароль
			</label>
			<input
				id="password"
				name="password"
				type="password"
				placeholder="Пароль"
				className={getClassName({ error, touched, value })}
				onChange={(e) => onChange(e.target.value)}
				onBlur={(e) => onBlur(e.target.value)}
				value={value}
			/>
			{touched && error && <span className={styles.error}>{error}</span>}
			<PasswordRequirements password={value} />
		</div>
	);
};
