import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
	Grid,
	Box,
	Typography,
	Button,
	FormControl,
	InputLabel,
	InputAdornment,
	Input,
	Hidden,
	TextField,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	root: {
		height: "100vh",
	},
	bgImg: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	},
	bgImgOverlay: {
		background: "linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)",
		mixBlendMode: "normal",
		opacity: 0.85,
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	overlayText: {
		fontWeight: 400,
		fontSize: "26px",
		lineHeight: "40px",
		textAlign: "center",
		color: "#FFFFFF",
		maxWidth: 269,
		marginTop: 50,
	},
	sideBanner: {
		position: "relative",
		maxHeight: "100vh",
	},
	accountSwitch: {
		position: "absolute",
		top: "30px",
		maxWidth: 351,
		flexDirection: "column",
		"@media (min-width: 450px)": {
			flexDirection: "row",
			right: "42px",
		},
	},
	accountBtn: {
		background: "#FFFFFF",
		boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
		borderRadius: "5px",
		width: 170,
		height: 54,
		fontWeight: 600,
		fontSize: "14px",
		lineHeight: "19px",
		color: "#3A8DFF",
	},
	ctaBtn: {
		margin: "0 auto",
		marginTop: "60px",
		display: "block",
		background: "#3A8DFF",
		borderRadius: "3px",
		color: "#fff",
		fontWeight: 700,
		fontSize: "16px",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
		width: "160px",
		height: "56px",
	},
}));

const Login = ({ user, login }) => {
	const [passwordValue, setPasswordValue] = useState("");
	const classes = useStyles();

	const history = useHistory();

	const handleLogin = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formElements = form.elements;
		const username = formElements.username.value;
		const password = formElements.password.value;

		await login({ username, password });
	};

	const handlePasswordChange = (e) => {
		setPasswordValue(e.target.value);
	};

	useEffect(() => {
		if (user && user.id) history.push("/home");
	}, [user, history]);

	return (
		<Grid container component="main" style={{ height: "100vh" }}>
			<Hidden smDown>
				<Grid item md={5} className={classes.sideBanner}>
					<Grid
						container
						className={classes.bgImgOverlay}
						justifyContent="center"
						alignItems="center"
					>
						<Grid item style={{ marginBottom: 100 }}>
							<img
								src="./assets/images/bubble.svg"
								alt="chat icon"
								style={{
									margin: "0 auto",
									display: "block",
								}}
							/>
							<Typography component="h2" className={classes.overlayText}>
								Converse with anyone with any language
							</Typography>
						</Grid>
					</Grid>
					<img
						className={classes.bgImg}
						src="./assets/images/bg-img.png"
						alt="people sending phone messages"
					/>
				</Grid>
			</Hidden>
			<Grid
				container
				item
				justifyContent="center"
				alignItems="center"
				style={{ position: "relative" }}
				xs={12}
				sm={12}
				md={7}
			>
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					className={classes.accountSwitch}
				>
					<Typography
						style={{
							fontWeight: 400,
							fontSize: "14px",
							lineHeight: "19px",
							color: "#B0B0B0",
						}}
					>
						Don't have an account?
					</Typography>
					<Link
						href="/register"
						to="/register"
						style={{ textDecoration: "none" }}
					>
						<Button className={classes.accountBtn}>Create account</Button>
					</Link>
				</Grid>
				<Box
					style={{
						maxWidth: "380px",
						padding: "10%",
					}}
				>
					<Typography
						component="h1"
						variant="h5"
						style={{
							alignSelf: "flex-start",
							marginBottom: "-5px",
							fontWeight: 600,
						}}
					>
						Welcome back!
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleLogin}
						sx={{ mt: 1 }}
					>
						<TextField
							fullWidth
							aria-label="username"
							label="Username"
							name="username"
							type="text"
							style={{ marginTop: "38px" }}
							required
						/>
						<FormControl style={{ marginTop: "38px" }} fullWidth>
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input
								required
								aria-label="password"
								id="password"
								type="password"
								value={passwordValue}
								onChange={handlePasswordChange}
								endAdornment={
									<InputAdornment position="end">
										<a
											href="#"
											style={{
												color: "#3A8DFF",
												textDecoration: "none",
												fontWeight: 600,
												fontSize: "14px",
											}}
										>
											Forgot?
										</a>
									</InputAdornment>
								}
							/>
						</FormControl>
						<Button
							type="submit"
							variant="contained"
							className={classes.ctaBtn}
						>
							Login
						</Button>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};

export default Login;
