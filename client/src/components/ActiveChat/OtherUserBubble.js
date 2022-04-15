import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Avatar } from '@material-ui/core';
import Message from './Message';
const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
	},
	avatar: {
		height: 30,
		width: 30,
		marginRight: 11,
		marginTop: 6,
	},
	bubble: {
		backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
		borderRadius: '0 10px 10px 10px',
	},
	textColor: {
		color: '#FFFFFF',
	},
}));

const OtherUserBubble = ({ text, time, otherUser, imgUrls }) => {
	const classes = useStyles();

	return (
		<Box className={classes.root}>
			<Avatar alt={otherUser.username} src={otherUser.photoUrl} className={classes.avatar} />
			<Message
				messageClasses={classes}
				text={text}
				time={time}
				imgUrls={imgUrls}
				otherUser={otherUser}
			/>
		</Box>
	);
};

export default OtherUserBubble;
