import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, FormControl, TextField, FormHelperText } from '@material-ui/core';
import LoginRegisterWrapper from './components/LoginRegisterWrapper';
import formStyles from './LoginRegisterForm.styles.js';

const Signup = ({ user, register }) => {
	const classes = formStyles();

	const history = useHistory();

	const [formErrorMessage, setFormErrorMessage] = useState({});

	const handleRegister = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formElements = form.elements;
		const username = formElements.username.value;
		const email = formElements.email.value;
		const password = formElements.password.value;
		const confirmPassword = formElements.confirmPassword.value;

		if (password !== confirmPassword) {
			setFormErrorMessage({ confirmPassword: 'Passwords must match' });
			return;
		}
		await register({ username, email, password });
	};

	useEffect(() => {
		if (user && user.id) history.push('/home');
	}, [user, history]);

	return (
		<LoginRegisterWrapper view={'register'}>
			<Box className={classes.form} component='form' noValidate onSubmit={handleRegister}>
				<TextField
					fullWidth
					aria-label='username'
					label='Username'
					name='username'
					type='text'
					required
				/>
				<TextField
					fullWidth
					aria-label='email address'
					label='E-mail address'
					name='email'
					type='email'
					required
				/>
				<FormControl error={!!formErrorMessage.confirmPassword} fullWidth>
					<TextField
						aria-label='password'
						label='Password'
						type='password'
						inputProps={{ minLength: 6 }}
						name='password'
						required
					/>
					<FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
				</FormControl>
				<FormControl error={!!formErrorMessage.confirmPassword} fullWidth>
					<TextField
						label='Confirm Password'
						aria-label='confirm password'
						type='password'
						inputProps={{ minLength: 6 }}
						name='confirmPassword'
						required
					/>
					<FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
				</FormControl>
				<Button type='submit' variant='contained' className={classes.ctaBtn}>
					Create
				</Button>
			</Box>
		</LoginRegisterWrapper>
	);
};

export default Signup;
