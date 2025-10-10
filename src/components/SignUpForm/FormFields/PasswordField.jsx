import { PasswordRequirements } from './PasswordRequirements';
import styles from '../SignUpForm.module.css';

export const PasswordField = ({ value, error, touched, onChange, onBlur }) => {
	const getClassName = () => {
		if (error && touched) return `${styles.input} ${styles.error}`;
		if (!error && touched && value) return `${styles.input} ${styles.success}`;
		return styles.input;
	};

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
				className={getClassName()}
				onChange={(e) => onChange(e.target.value)}
				onBlur={(e) => onBlur(e.target.value)}
				value={value}
			/>
			{touched && error && <span className={styles.error}>{error}</span>}
			<PasswordRequirements password={value} />
		</div>
	);
};
