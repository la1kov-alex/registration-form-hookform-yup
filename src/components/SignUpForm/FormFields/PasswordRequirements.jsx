import styles from '../SignUpForm.module.css';

export const PasswordRequirements = ({ password = '' }) => {
	const requirements = [
		{
			text: 'Минимум 8 символов',
			met: password && password.length >= 8,
		},
		{
			text: 'Буквы в верхнем и нижнем регистре',
			met: password && /(?=.*[a-z])(?=.*[A-Z])/.test(password),
		},
		{
			text: 'Хотя бы одна цифра',
			met: password && /(?=.*\d)/.test(password),
		},
		{
			text: 'Хотя бы один специальный символ',
			met: password && /(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])/.test(password),
		},
	];

	return (
		<div className={styles.password__requirements}>
			<strong>Требования к паролю:</strong>
			<ul>
				{requirements.map((req, index) => (
					<li
						key={index}
						className={
							req.met ? styles.requirement__met : styles.requirement__unmet
						}
					>
						{req.text}
					</li>
				))}
			</ul>
		</div>
	);
};
