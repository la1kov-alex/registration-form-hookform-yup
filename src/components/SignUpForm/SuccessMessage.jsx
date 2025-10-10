import styles from './SignUpForm.module.css';

export const SuccessMessage = ({ email }) => {
	return (
		<div className={styles.form__container}>
			<div className={styles.success}>
				<h3>Регистрация успешно завершена!</h3>
				<p>На вашу почту {email} отправлено письмо с подтверждением.</p>
			</div>
		</div>
	);
};
