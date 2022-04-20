import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  uploadedImg: {
    borderRadius: '10px',
    borderBottomRightRadius: 0,
    display: 'block',
    width: '150px',
  },
  uploadedImgSmall: {
    width: '75px',
    maxHeight: '75px',
    '& + img': {
      marginLeft: '10px',
    },
  },
}));

const MessageAttachments = ({ imgUrls }) => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="flex-end">
      {imgUrls.map((url) => (
        <img
          className={`${classes.uploadedImg} ${imgUrls.length > 1 && classes.uploadedImgSmall}`}
          key={url}
          src={url}
          alt="user upload"
        />
      ))}
    </Grid>
  );
};

export default MessageAttachments;
