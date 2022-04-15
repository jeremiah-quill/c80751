import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100vh',
		display: 'flex',
	},
	bgImg: {
		width: '100%',
		height: '100%',
		objectFit: 'cover',
	},
	bgImgOverlay: {
		background: 'linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)',
		mixBlendMode: 'normal',
		opacity: 0.85,
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	overlayText: {
		fontWeight: 400,
		fontSize: '26px',
		lineHeight: '40px',
		textAlign: 'center',
		color: '#FFFFFF',
		maxWidth: 269,
		marginTop: 50,
	},
	sideBanner: {
		position: 'relative',
		maxHeight: '100vh',
		mwidth: '425px',
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'block',
		},
	},
	accountSwitch: {
		position: 'absolute',
		top: '30px',
		maxWidth: 351,
		flexDirection: 'column',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			right: '42px',
		},
	},
	accountBtn: {
		background: '#FFFFFF',
		boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
		borderRadius: '5px',
		width: 170,
		height: 54,
		fontWeight: 600,
		fontSize: '14px',
		lineHeight: '19px',
		color: '#3A8DFF',
		marginTop: '10px',
		[theme.breakpoints.up('md')]: {
			marginTop: '0px',
		},
	},
	formPanel: {
		flex: 1,
		position: 'relative',
	},
	overlayContent: {
		marginBottom: '100px',
		'& img': {
			margin: '0 auto',
			display: 'block',
		},
	},
	accountText: {
		fontWeight: 400,
		fontSize: '14px',
		lineHeight: '19px',
		color: '#B0B0B0',
	},
	accountLink: {
		textDecoration: 'none',
	},
	formPanelContent: {
		maxWidth: '380px',
		padding: '0 10%',
	},
	formPanelHeader: {
		alignSelf: 'flex-start',
		marginBottom: '-5px',
		fontWeight: 600,
		fontSize: '26px',
	},
}));

const LoginRegisterWrapper = ({ view, children }) => {
	const classes = useStyles();
	return (
		<Grid component="main" className={classes.root}>
			<Grid item className={classes.sideBanner}>
				<Grid
					container
					className={classes.bgImgOverlay}
					justifyContent="center"
					alignItems="center">
					<Grid item className={classes.overlayContent}>
						<img src="./assets/images/bubble.svg" alt="chat icon" />
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
			<Grid
				className={classes.formPanel}
				container
				item
				justifyContent="center"
				alignItems="center">
				<Grid
					container
					justifyContent="space-between"
					alignItems="center"
					className={classes.accountSwitch}>
					<Typography className={classes.accountText}>
						{view === 'register' ? 'Already have an account?' : "Don't have an account?"}
					</Typography>
					<Link
						href={view === 'register' ? '/login' : '/register'}
						to={view === 'register' ? '/login' : '/register'}
						className={classes.accountLink}>
						<Button className={classes.accountBtn}>
							{view === 'register' ? 'Login' : 'Register'}
						</Button>
					</Link>
				</Grid>
				<Box className={classes.formPanelContent}>
					<Typography component="h1" className={classes.formPanelHeader}>
						{view === 'register' ? 'Create an account.' : 'Welcome back!'}
					</Typography>
					{children}
				</Box>
			</Grid>
		</Grid>
	);
};

export default LoginRegisterWrapper;
