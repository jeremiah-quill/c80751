import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, TextField } from '@material-ui/core';
import LoginRegisterWrapper from './components/LoginRegisterWrapper';
import formStyles from './LoginRegisterForm.styles.js';

const Login = ({ user, login }) => {
	const classes = formStyles();

	const history = useHistory();

	const handleLogin = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formElements = form.elements;
		const username = formElements.username.value;
		const password = formElements.password.value;

		await login({ username, password });
	};

	useEffect(() => {
		if (user && user.id) history.push('/home');
	}, [user, history]);

	return (
		<LoginRegisterWrapper view={'login'}>
			<Box
				className={classes.form}
				component='form'
				noValidate
				onSubmit={handleLogin}
				sx={{ mt: 1 }}>
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
					aria-label='password'
					label='Password'
					name='password'
					type='password'
					required
				/>
				<Button type='submit' variant='contained' className={classes.ctaBtn}>
					Login
				</Button>
			</Box>
		</LoginRegisterWrapper>
	);
};

export default Login;
