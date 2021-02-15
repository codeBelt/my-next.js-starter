import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { LightBulbIcon } from '../light-bulb-icon/LightBulbIcon';
import { useProTipStyles } from './ProTip.styles';

interface IProps {}

export const ProTip: React.FC<IProps> = (props) => {
  const classes = useProTipStyles();

  return (
    <Typography className={classes.root} color="textSecondary">
      <LightBulbIcon className={classes.lightBulb} />
      Pro tip: See more <Link href="https://material-ui.com/getting-started/templates/">templates</Link> on the
      Material-UI documentation.
    </Typography>
  );
};
