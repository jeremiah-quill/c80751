import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import MessageAttachments from './MessageAttachments';

const useStyles = makeStyles(() => ({
	message: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	userMessage: {
		alignItems: 'flex-end',
	},
	messageReverse: {
		flexDirection: 'column-reverse',
	},
	date: {
		fontSize: 11,
		color: '#BECCE2',
		fontWeight: 'bold',
		marginBottom: 5,
	},
	text: {
		fontSize: 14,
		fontWeight: 'bold',
		letterSpacing: -0.2,
		padding: 8,
	},
}));

const Message = ({ text, time, otherUser, imgUrls, messageClasses }) => {
	const classes = useStyles();

	return (
		<Box
			className={`${classes.message} ${!otherUser && classes.userMessage} ${
				imgUrls?.length > 1 && classes.messageReverse
			}`}>
			<Typography className={classes.date}>
				{otherUser?.username} {time}
			</Typography>
			{imgUrls !== null && <MessageAttachments imgUrls={imgUrls} />}
			{text && (
				<Box className={messageClasses.bubble}>
					<Typography className={`${classes.text} ${messageClasses.textColor}`}>{text}</Typography>
				</Box>
			)}
		</Box>
	);
};

export default Message;
