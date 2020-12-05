import React from 'react';
import Typography from '@material-ui/core/Typography';

interface IProps {}

export const Title: React.FC<IProps> = (props) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
};
