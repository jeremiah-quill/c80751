import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Message from './Message';

const useStyles = makeStyles(() => ({
  message: {
    alignItems: 'flex-end',
  },
  textColor: {
    color: '#91A3C0',
  },
  bubble: {
    background: '#F4F6FA',
    borderRadius: '10px 10px 0 10px',
  },
}));

const SenderBubble = ({ time, text, imgUrls }) => {
  const classes = useStyles();

  return <Message messageClasses={classes} time={time} text={text} imgUrls={imgUrls} />;
};

export default SenderBubble;
