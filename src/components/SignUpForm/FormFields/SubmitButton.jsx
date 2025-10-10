import styles from '../SignUpForm.module.css';

export const SubmitButton = ({ disabled }) => {
	return (
		<button
			type="submit"
			className={`${styles.button} ${disabled ? styles.button__disabled : ''}`}
			disabled={disabled}
		>
			Зарегистрироваться
		</button>
	);
};
