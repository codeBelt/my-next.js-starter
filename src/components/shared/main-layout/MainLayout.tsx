import React, { useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { MainNavigation } from '../main-navigation/MainNavigation';
import { Copyright } from '../copyright/Copyright';
import { useMainLayoutStyles } from './MainLayout.styles';
import Head from 'next/head';

interface IProps {
  title: string;
}

export const MainLayout: React.FC<IProps> = (props) => {
  const classes = useMainLayoutStyles();
  const [open, setOpen] = useState(true);

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className={classes.root}>
        <AppBar position="absolute" className={clsx(classes.appBar, { [classes.appBarShift]: open })}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(true)}
              className={clsx(classes.menuButton, { [classes.menuButtonHidden]: open })}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              {props.title}
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          classes={{
            paper: clsx(classes.drawerPaper, { [classes.drawerPaperClose]: !open }),
          }}
          open={open}
          variant="permanent"
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={() => setOpen(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <MainNavigation />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            {props.children}
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </>
  );
};
