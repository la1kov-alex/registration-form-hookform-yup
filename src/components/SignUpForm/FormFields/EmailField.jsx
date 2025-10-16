import styles from '../SignUpForm.module.css';

export const EmailField = ({ register, error, value }) => {
	const getClassName = () => {
		if (error) return `${styles.input} ${styles.error}`;
		if (value && !error) return `${styles.input} ${styles.success}`;
		return styles.input;
	};

	return (
		<div className={styles.input__group}>
			<label htmlFor="email" className={styles.label}>
				Email
			</label>
			<input
				id="email"
				type="email"
				placeholder="your@email.com"
				className={getClassName()}
				{...register('email')}
			/>
			{error && <span className={styles.error}>{error.message}</span>}
		</div>
	);
};
