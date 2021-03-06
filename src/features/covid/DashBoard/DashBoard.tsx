import React, { useEffect } from 'react';
import styles from './DashBoard.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Container, Grid } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncGet, fetchAsyncGetDaily, selectData } from '../covidSlice';
import SwitchCountry from '../SwitchCountry/SwitchCountry';
import Chart from '../Chart/Chart';
import PieChart from '../PieChart/PieChart';
import Cards from '../Cards/Cards';

const useStyles = makeStyles((theme) => ({
  backgroundcolor: { backgroundColor: '#283544' },
  fontbold: { fontWeight: 'bold' },
  title: { flexGrow: 1 },
  content: { marginTop: 85 }, 
}));


const DashBoard : React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchAsyncGet());
    dispatch(fetchAsyncGetDaily());
  }, [dispatch]);

  return (
    <main>
      <AppBar position="absolute">
        <Toolbar className={classes.backgroundcolor}>
          <Typography variant="h5" className={classes.title+" "+styles.titleFont}>
            COVID-19 Live Dashboard
          </Typography>
          {data && (
            <Typography variant="body1" className={styles.dateFont}>
              Updated : {new Date(data.lastUpdate).toDateString()}
            </Typography>
          )}
        </Toolbar>
      </AppBar>

      <Container className={classes.content}>
        <div className={styles.container}>
            <SwitchCountry />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Chart />
          </Grid>
          <Grid item xs={12} md={5}>
            <PieChart />
          </Grid>
          <Grid item xs={12} md={12}>
            <Cards />
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}

export default DashBoard
