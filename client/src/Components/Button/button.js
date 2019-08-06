import React from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import Button from './node_modules/@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        Let's Do This!
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        No, Get away!
      </Button>
    </div>
  );
}
