import styles from '../SignUpForm.module.css';

export const SubmitButton = ({ disabled, isSubmitting }) => {
	return (
		<button
			type="submit"
			className={`${styles.button} ${disabled ? styles.button__disabled : ''}`}
			disabled={disabled}
		>
			{isSubmitting ? 'Отправка...' : 'Зарегистрироваться'}
		</button>
	);
};
