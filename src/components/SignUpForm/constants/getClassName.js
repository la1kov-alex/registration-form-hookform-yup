import styles from '../SignUpForm.module.css';

export const getClassName = ({ error, touched, value }) => {
	if (error && touched) return `${styles.input} ${styles.error}`;
	if (!error && touched && value) return `${styles.input} ${styles.success}`;
	return styles.input;
};
