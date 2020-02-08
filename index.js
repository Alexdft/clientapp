import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";

import CNPStepper from './CNPStepper';
import GroupAuthors from './GroupAuthors';

const useStyles = makeStyles(theme => ({
  hint: {
    ...theme.typography.body2,
    // padding: theme.spacing(3),
    height: theme.spacing(7),
    lineHeight: 4,
    color: '#7F8FA4'
  },
  toolbarMargin: theme.mixins.toolbar
}))

const App = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar color='inherit'>
        <Toolbar>
          <CNPStepper></CNPStepper>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
      <div className={classes.hint} color="textSecondary" variant='body2' align="center">Sometimes a single author has entries that are given under different email addresses or names. Just select git names in the list of authors to group all duplicates together to one engineer.</div>
      <Box w={1} display="flex" justifyContent="center">
        <GroupAuthors></GroupAuthors>
      </Box>
    </>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);