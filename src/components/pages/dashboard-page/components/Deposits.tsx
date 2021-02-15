import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Title } from './Title';
import { useDepositsStyles } from './Deposits.styles';

interface IProps {}

export const Deposits: React.FC<IProps> = (props) => {
  const classes = useDepositsStyles();

  return (
    <>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={(event: React.MouseEvent<HTMLAnchorElement>) => event.preventDefault()}>
          View balance
        </Link>
      </div>
    </>
  );
};
