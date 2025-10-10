import styles from '../SignUpForm.module.css';

export const EmailField = ({ value, error, touched, onChange, onBlur }) => {
	const getClassName = () => {
		if (error && touched) return `${styles.input} ${styles.error}`;
		if (!error && touched && value) return `${styles.input} ${styles.success}`;
		return styles.input;
	};

	return (
		<div className={styles.input__group}>
			<label htmlFor="email" className={styles.label}>
				Email
			</label>
			<input
				id="email"
				name="email"
				type="email"
				placeholder="Почта"
				className={getClassName()}
				onChange={(e) => onChange(e.target.value)}
				onBlur={(e) => onBlur(e.target.value)}
				value={value}
			/>
			{touched && error && <span className={styles.error}>{error}</span>}
		</div>
	);
};
