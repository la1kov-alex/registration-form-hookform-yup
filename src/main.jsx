import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SignUpForm } from './components/SignUpForm/SignUpForm';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<SignUpForm />
	</StrictMode>,
);
