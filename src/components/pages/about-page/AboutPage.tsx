import React from 'react';
import Link from '../../shared/Link';
import { Routes } from '../../../constants/Routes';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ProTip } from '../../ui/pro-tip/ProTip';

interface IProps {}

export const AboutPage: React.FC<IProps> = (props) => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          This the about page.
        </Typography>
        <Link href={Routes.Index}>Go to the main page</Link>
        <ProTip />
      </Box>
    </Container>
  );
};
