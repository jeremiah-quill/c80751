import React, { useState } from 'react';
import axios from 'axios';
import { FormControl, FilledInput, Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhotoLibraryOutlinedIcon from '@material-ui/icons/PhotoLibraryOutlined';

const useStyles = makeStyles(() => ({
	root: {
		justifySelf: 'flex-end',
		marginTop: 15,
		position: 'relative',
	},
	input: {
		height: 70,
		backgroundColor: '#F4F6FA',
		borderRadius: 8,
		marginBottom: 20,
	},
	uploadInput: {
		opacity: 0,
		position: 'absolute',
		zIndex: -1,
	},
	uploadInputLabel: {
		position: 'absolute',
		right: 12,
		top: 22,
		cursor: 'pointer',
	},
	imgPreview: {
		position: 'absolute',
		right: 0,
		top: '-20px',
		gap: '4px',
		'& > p': {
			fontSize: '8px',
		},
	},
}));

const instance = axios.create();

const Input = ({ otherUser, conversationId, user, postMessage }) => {
	const classes = useStyles();
	const [text, setText] = useState('');
	const [attachments, setAttachments] = useState([]);

	const handleChange = (event) => {
		setText(event.target.value);
	};

	// JQ: add file objects to state when they are selected
	const handleAttachmentChange = (e) => {
		const fileList = Array.from(e.target.files);
		setAttachments(fileList);
	};

	// lipzwxls
	// dww49dex1

	const uploadImage = async (image) => {
		// JQ: create form data with image (using an unsigned upload preset)
		const formData = new FormData();
		formData.append('upload_preset', 'lipzwxls');
		formData.append('file', image);

		// JQ: send request to cloudinary to upload image
		const response = await instance.post(
			`https://api.cloudinary.com/v1_1/dww49dex1/image/upload`,
			formData
		);

		// JQ: return url from cloudinary request
		return response.data.url;
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formElements = form.elements;

		console.log(attachments);

		// upload images on form submit and get back urls to add to the message request body
		const urls = [];
		if (attachments.length > 0) {
			for (let i = 0; i < attachments.length; i++) {
				let url = await uploadImage(attachments[i]);
				urls.push(url);
			}
		}

		// add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
		const reqBody = {
			text: formElements.text.value,
			attachments: urls,
			recipientId: otherUser.id,
			conversationId,
			sender: conversationId ? null : user,
		};
		await postMessage(reqBody);
		setText('');
		setAttachments([]);
	};

	return (
		<Box component="form" className={classes.root} onSubmit={handleSubmit}>
			<Grid container justifyContent="flex-end" className={classes.imgPreview}>
				{attachments.map((attachment) => (
					<Typography component="p" key={attachment.name}>
						{attachment.name}
					</Typography>
				))}
			</Grid>
			<FormControl fullWidth hiddenLabel>
				<FilledInput
					classes={{ root: classes.input }}
					disableUnderline
					placeholder="Type something..."
					value={text}
					name="text"
					onChange={handleChange}
				/>
				<label className={classes.uploadInputLabel} htmlFor="upload-input">
					<PhotoLibraryOutlinedIcon htmlColor="lightgray" />
				</label>
				<input
					type="file"
					name="image"
					className={classes.uploadInput}
					onChange={handleAttachmentChange}
					id="upload-input"
					files={attachments}
					multiple
				/>
			</FormControl>
		</Box>
	);
};

export default Input;
