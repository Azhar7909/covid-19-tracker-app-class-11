import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


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

export default function CountryWiseData() {
  const classes = useStyles();
  const [getCountryWiseData, setCountryWiseData] = useState([]);
console.log(getCountryWiseData,"getCountryWiseData");

  useEffect(() => {
    async function GetCountryWiseData() {
      const result = await fetch("https://covid19.mathdro.id/api/countries");
      const data = await result.json();

      setCountryWiseData(data.countries);

    }
    GetCountryWiseData();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {getCountryWiseData.map((val, ind) => {
          return (
            <Grid item xs={4} key={ind}>
              <Paper className={classes.paper}>
                <span className={classes.blueColor}>{val.name}</span>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
