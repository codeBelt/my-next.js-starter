import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useProTipStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: theme.spacing(6, 0, 3),
    },
    lightBulb: {
      verticalAlign: 'middle',
      marginRight: theme.spacing(1),
    },
  })
);
