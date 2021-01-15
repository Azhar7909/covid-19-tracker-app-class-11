import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GlobalDataPieChart from "./GlobalDataPieChart";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  blueColor:{
      color:'blue',
      fontWeight:900
  }
}));

export default function GlobalData() {
  const classes = useStyles();
  const [globalData, setGlobalData] = useState({});
  const [deathVal, setDeathVal] = useState(0);
  const [confirmVal, setConfirmVal] = useState(0);
  const [recoverVal, setRecoverVal] = useState(0);


  useEffect(() => {
    async function getGlobalData() {
      const result = await fetch("https://covid19.mathdro.id/api");
      const data = await result.json();

      //   Delete Some Unneccessary Data
      delete data.countries;
      delete data.countryDetail;
      delete data.dailySummary;
      delete data.dailyTimeSeries;
      delete data.image;
      delete data.lastUpdate;
      delete data.source;
      
      setGlobalData(data);
      setDeathVal(data.deaths.value)
      setConfirmVal(data.confirmed.value);
      setRecoverVal(data.recovered.value)

    }
    getGlobalData();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(globalData).map((key, ind) => {
          return (
            <Grid item xs={4} key={ind}>
              <Paper className={classes.paper}>
                <span className={classes.blueColor}>{key.toUpperCase()}</span> <br />
                <br /> {globalData[key].value}
              </Paper>
            </Grid>
          );
        })}
      </Grid>

      {/* Pie Chart */}
      <GlobalDataPieChart death = {deathVal} confirm = {confirmVal} recover = {recoverVal}/>
    </div>
  );
}
